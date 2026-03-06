import { NextResponse } from "next/server";
import {redis} from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { NoReplyEmail } from "../../../lib/no-repy-email";
import { sendEmail } from "../../../lib/sendEmail";
import { ContactNotificationEmail } from "../../../lib/send-info-email";

const cache = new Map();

const rateLimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "180 s"),
  ephemeralCache: cache,
  analytics: false,
});

const contactSchema = z.object({

  numeContact: z
    .string({
      required_error: "Numele este obligatoriu",
    })
    .trim()
    .min(3, "Numele trebuie să aibă minim 3 caractere")
    .max(60, "Numele este prea lung")
    .regex(/^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/, "Numele conține caractere invalide"),

  afacereContact: z
    .string()
    .trim()
    .max(100, "Numele afacerii este prea lung")
    .optional()
    .or(z.literal("")),

  emailContact: z
    .string({
      required_error: "Emailul este obligatoriu",
    })
    .trim()
    .toLowerCase()
    .email("Adresa de email nu este validă")
    .max(120, "Email prea lung"),

  telefonContact: z
    .string({
      required_error: "Telefonul este obligatoriu",
    })
    .trim()
    .refine((val) => {
      const phone = parsePhoneNumberFromString(val, "RO");
      return phone?.isValid();
    }, {
      message: "Număr de telefon invalid",
    }),

  detaliiContact: z
    .string()
    .trim()
    .max(1000, "Mesajul este prea lung")
    .optional()
    .or(z.literal("")),

  acordDate: z
    .boolean({
      required_error: "Trebuie să accepți politica de confidențialitate",
    })
    .refine((val) => val === true, {
      message: "Trebuie să accepți politica de confidențialitate",
    }),

});


export async function POST(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0] ?? "127.0.0.1";

  const {success} = await rateLimit.limit(`send-form_${ip}`);
  if(!success){
    return NextResponse.json(
      {message:"Prea multe cereri! Incercati in cateva momente"},
      {status: 429}
    )
  }

  const body = await req.json();

  const result = contactSchema.safeParse(body);
  if(!result.success){
      return NextResponse.json(
    { message: "Datele introduse nu sunt corecte" },
    { status: 400 }
  );
  }

  const validatedData = result.data;
  
  const NoReplyEmailBodyTemplate = NoReplyEmail();

  const InfoEuCerereMailTemplate = ContactNotificationEmail({
      name: validatedData.numeContact,
      business: validatedData.afacereContact,
      phone: validatedData.telefonContact,
      email: validatedData.emailContact,
      message: validatedData.detaliiContact
  })

  try{
    await sendEmail({
    fromEmail: "office@georgeweb-design.ro",
    fromName: "George Web Design",
    toEmail: "office@georgeweb-design.ro",
    subject: "Ai primit un formular de contact!",
    html: InfoEuCerereMailTemplate,
  }) 

  await sendEmail({
    fromEmail: "noreply@georgeweb-design.ro",
    fromName: "George Web Design",
    toEmail: validatedData.emailContact,
    subject: "Solicitarea ta a fost înregistrată",
    html: NoReplyEmailBodyTemplate,
    replyToEmail: "office@georgeweb-design.ro"
  })
  } catch(error){
    console.error("EROARE LA TRIMITERE EMAIL: ", error);
    
    return NextResponse.json(
      {message: "Eroare la trimiterea formularului!"}, 
      {status: 400}
    )
  }

  return NextResponse.json(
  { message: "Formular trimis cu succes!" },
  { status: 200 }
);

}