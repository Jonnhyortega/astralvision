import { transporter } from "../config/mailer.js";

export const sendMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: "Faltan campos obligatorios" });

    const mailOptions = {
      from: `"Formulario Astral Vision" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // correo donde recibís los mensajes
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>📩 Nuevo contacto recibido</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Correo enviado correctamente" });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({ error: "Error interno al enviar el correo" });
  }
};
