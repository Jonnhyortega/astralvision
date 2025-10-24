import { useState } from "react";
import { WrapperForm } from "./ContactFormStyles.js";
import ModalMessage from "../ModalMessage/ModalMessage.jsx";
import { motion } from "framer-motion";
import "animate.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { user_name, user_email, message } = formData;
    if (!user_name || !user_email || !message) {
      setStatus("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user_email)) {
      setStatus("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setIsModalOpen(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://i6khkfix69.execute-api.us-east-1.amazonaws.com/default/nodemailer-astralvision",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.user_name,
            email: formData.user_email,
            phone: formData.user_number,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("✅ Mensaje enviado con éxito, te responderemos en breve.");
        setFormData({ user_name: "", user_email: "", user_number: "", message: "" });
      } else {
        throw new Error(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("❌ Hubo un problema al enviar el mensaje. Intenta nuevamente.");
    } finally {
      setIsModalOpen(true);
      setLoading(false);
    }
  };

  return (
    <WrapperForm>
      {!isModalOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="form-box"
        >
          <h2>Hablemos sobre tu proyecto</h2>
          <p>Contanos tu idea o necesidad y te respondemos en menos de 24 horas.</p>

          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre completo"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="correo@ejemplo.com"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <label>Teléfono</label>
            <input
              type="tel"
              name="user_number"
              placeholder="(opcional)"
              value={formData.user_number}
              onChange={handleChange}
            />

            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Contame qué estás buscando..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <ModalMessage updateModalOpen={setIsModalOpen} message={status} />
      )}
    </WrapperForm>
  );
};

export default ContactForm;
