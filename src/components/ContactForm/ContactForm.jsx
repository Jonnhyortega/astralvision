import React, { useState } from "react";
import emailjs from "emailjs-com";
import { WrapperForm } from "./ContactFormStyles.js";
import ModalMessage from "../ModalMessage/ModalMessage.jsx";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { user_name, user_email, user_number, message } = formData;
    if (!user_name || !user_email || !message) {
      setStatus("Por favor, completa todos los campos obligatorios.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user_email)) {
      setStatus("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
    if (user_number && !/^\d+$/.test(user_number)) {
      setStatus("Por favor, ingresa un número de teléfono válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setIsModalOpen(true);
      return;
    }

    emailjs
      .send(
        "service_gdo8n6y",
        "template_zf3xnet",
        formData,
        "30EV_8FnuYed_mJCi"
      )
      .then((response) => {
        setIsModalOpen(true);
        console.log("Email sent successfully:", response.status, response.text);
        setStatus("Mensaje enviado con éxito");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setStatus("Error al enviar el mensaje, por favor intenta de nuevo");
        setIsModalOpen(true);
      });
  };

  return (
    <WrapperForm>
      {!isModalOpen ? (
        <div>
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="user_name">Nombre</label>
            <input
              type="text"
              name="user_name"
              placeholder="Ingrese nombre"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="user_email">Correo electrónico</label>

            <input
              type="email"
              name="user_email"
              placeholder="Ingrese correo electrónico"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <label htmlFor="user_number">Teléfono</label>

            <input
              type="number"
              name="user_number"
              placeholder="Tu teléfono"
              value={formData.user_number}
              onChange={handleChange}
            />
            <label htmlFor="message">Mensaje</label>

            <textarea
              name="message"
              placeholder="Escriba algo que quiera contarnos"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      ) : (
        <ModalMessage updateModalOpen={setIsModalOpen} message={status} />
      )}
    </WrapperForm>
  );
};

export default ContactForm;
