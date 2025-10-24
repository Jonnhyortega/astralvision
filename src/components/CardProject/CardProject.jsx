import React from "react";
import { CardProjectWrapper } from "./CardProjectStyles";
import { FiExternalLink } from "react-icons/fi";
import "animate.css";

export const CardProject = ({ projectObject }) => {
  return (
    <CardProjectWrapper
      style={{
        background: `linear-gradient(180deg, ${projectObject.color[0]} 0%, #ffffff10 100%)`,
      }}
    >
      {/* 🧠 Encabezado */}
      <h3 style={{ color: projectObject.color[1] }}>
        {projectObject.name}
      </h3>

      {/* 🖼️ Imagen del proyecto */}
      <div className="image-container animate__animated animate__fadeInUp">
        <img src={projectObject.img[0]} alt={projectObject.name} />
      </div>

      {/* 📄 Descripción */}
      <p className="description" style={{ color: "#111" }}>
        {projectObject.description}
      </p>

      {/* 🔗 Botón de enlace */}
      <a
        href={projectObject.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: projectObject.color[1],
        }}
        className="visit-button"
      >
        <FiExternalLink size={18} />
        <span>Visitar sitio</span>
      </a>
    </CardProjectWrapper>
  );
};

export default CardProject;
