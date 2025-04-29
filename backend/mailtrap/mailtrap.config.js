import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || "0a006e94ae2d1d7f1feb57065102878a";
const ENDPOINT = "https://send.api.mailtrap.io/";
export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};


