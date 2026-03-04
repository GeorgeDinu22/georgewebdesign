import { MailerSend } from "mailersend";

if (!process.env.MAILERSEND_API_KEY) {
  throw new Error("MAILERSEND_API_KEY is missing");
}

export const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});