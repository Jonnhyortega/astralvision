import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail", // Podés usar Outlook, SMTP personalizado, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Error en configuración SMTP:", error);
  } else {
    console.log("✅ Servidor de correo listo para enviar mensajes");
  }
});
