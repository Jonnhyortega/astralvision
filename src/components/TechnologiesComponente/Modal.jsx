import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: red;
`;

export default function Modal({ tech }) {
  const modalContent = {
    javascript: {
      title: "JavaScript Moderno",
      description:
        "Utilizamos JavaScript para crear interacciones dinámicas y mejorar la experiencia del usuario.",
      benefits: [
        "Formularios inteligentes",
        "Animaciones complejas",
        "Integraciones con APIs",
        "Mejora de conversiones",
      ],
      src: "/assets/icons/javascript.png",
    },
    react: {
      title: "React Avanzado",
      description:
        "Con React, creamos interfaces de usuario robustas y escalables para aplicaciones web.",
      benefits: [
        "Componentes reutilizables",
        "Actualizaciones en tiempo real",
        "Optimización del rendimiento",
        "Facilidad de mantenimiento",
      ],
      src: "/assets/icons/react.png",
    },
    nextjs: {
      title: "Next.js para SEO",
      description:
        "Next.js nos permite crear sitios web con un SEO óptimo y una experiencia de usuario superior.",
      benefits: [
        "Generación estática de sitios web",
        "Rendimiento mejorado",
        "Optimización para motores de búsqueda",
        "Carga ultrarrápida",
      ],
      src: "/assets/icons/nextjs.png",
    },
    nodejs: {
      title: "Node.js para Backend",
      description:
        "Node.js nos permite desarrollar servidores robustos y escalables para aplicaciones web.",
      benefits: [
        "Desarrollo de APIs rápidas",
        "Escalabilidad horizontal",
        "Integración con bases de datos",
        "Soporte para WebSockets",
      ],
      src: "/assets/icons/nodejs.png",
    },
    "google-analytics": {
      title: "Google Analytics",
      description:
        "Utilizamos Google Analytics para analizar el comportamiento de los usuarios y mejorar la experiencia.",
      benefits: [
        "Análisis de tráfico web",
        "Seguimiento de conversiones",
        "Informes detallados",
        "Optimización de campañas",
      ],
      src: "/assets/icons/analytics.svg",
    },
    "facebook-ads": {
      title: "Facebook Ads",
      description:
        "Con Facebook Ads, alcanzamos a nuestro público objetivo de manera efectiva.",
      benefits: [
        "Publicidad segmentada",
        "Alcance masivo",
        "Optimización de ROI",
        "Análisis de resultados",
      ],
      src: "/assets/icons/facebook-ads.svg",
    },
  };

  const technologie = modalContent[tech];

  if (!technologie) return null;

  return (
    <ModalWrapper>
      <div className="modal-content">
        <img
          src={technologie.src}
          alt={technologie.title}
          width="20"
          height="20"
        />
        <h4>{technologie.title}</h4>
        <p>{technologie.description}</p>
        <ul>
          {technologie.benefits.map((benefit) => (
            <li key={benefit}>
              <span>✓</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
    </ModalWrapper>
  );
}
