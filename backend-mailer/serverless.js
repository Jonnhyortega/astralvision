const express = require("express");
const serverless = require("serverless-http");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Configuración global de CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://astralvisionestudio.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ Manejo de preflight OPTIONS
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// ✅ Endpoint principal
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    console.log("📨 Datos recibidos:", { name, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `
📧 Email: ${email}
📱 Teléfono: ${phone}
📝 Mensaje:
${message}
      `,
    });

    console.log("✅ Correo enviado:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Correo enviado correctamente ✅",
    });
  } catch (error) {
    console.error("❌ Error enviando correo:", error);
    res.status(500).json({
      success: false,
      message: "Error al enviar el correo ❌",
      error: error.message,
    });
  }
});

// ✅ Exportación final (para AWS Lambda)
module.exports.handler = serverless(app);
