import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || "06d149aede2c761133da044fd999d0d8";
const ENDPOINT = "https://send.api.mailtrap.io/";
export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};


