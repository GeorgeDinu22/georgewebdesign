import { EmailParams, Sender, Recipient } from "mailersend";
import { mailerSend } from "./mailersend";

export async function sendEmail({
  fromEmail = "office@georgeweb-design.ro",
  fromName = "George Web Design",
  toEmail,
  toName = "",
  subject = "Am primit cererea ta!",
  html = "",
  replyToEmail,
  replyToName,
}) {
  try {
    const sentFrom = new Sender(fromEmail, fromName);

    const recipients = [
      new Recipient(toEmail, toName),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setHtml(html);

    if (replyToEmail) {
      emailParams.setReplyTo(
        new Sender(replyToEmail, replyToName || replyToEmail)
      );
    }

    const response = await mailerSend.email.send(emailParams);

    return {
      success: true,
      response,
    };

  } catch (error) {
    console.error("MailerSend error:", error);

    return {
      success: false,
      error,
    };
  }
}