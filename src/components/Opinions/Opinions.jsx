import React, { Suspense, lazy, useRef } from "react";
import { useInView } from "framer-motion";
import { Reveal, RevealGroup } from "../motion";
import { fadeUp, hoverLift, tapPress } from "../../lib/motion";
import { OpinionsWrapper, TestimonialCard } from "./OpinionsStyles";
import StarIcon from "@mui/icons-material/Star";

// Lazy load the 3D background to optimize performance
const GalaxyBackground = lazy(() => import("./GalaxyBackground"));

const testimonialsData = [
  {
    id: 1,
    name: "Sanitarios Lugano",
    company: "Comercio de Construcción",
    comment: "Destaco enormemente la agilidad y el profesionalismo de Astral Vision. Desarrollaron nuestra plataforma web con una atención altamente personalizada y el impacto positivo en consultas y ventas se notó de inmediato.",
    stars: 5,
    logo: "https://res.cloudinary.com/do87isqjr/image/upload/w_400,f_auto,q_auto/v1761247566/LogoBlue_myntoz.jpg"
  },
  {
    id: 2,
    name: "Estudio Rokotovich",
    company: "Estudio Jurídico",
    comment: "Un equipo de primer nivel. Supieron entender la jerarquía y seriedad que requeríamos, entregando un sitio web elegante, moderno y enfocado en generar confianza en nuevos clientes.",
    stars: 5,
    logo: "https://res.cloudinary.com/do87isqjr/image/upload/w_400,f_auto,q_auto/v1764261488/logo-sinfondo_lbgdzo.png"
  },
  {
    id: 3,
    name: "HC Habilitaciones",
    company: "Gestión Comercial",
    comment: "La calidad del desarrollo y el asesoramiento estratégico constante marcaron una gran diferencia en nuestra presencia digital. Nos brindaron una solución robusta y ágil totalmente a medida.",
    stars: 5,
    logo: "https://res.cloudinary.com/do87isqjr/image/upload/w_400,f_auto,q_auto/v1761247432/logo_au2kan.webp"
  },
  {
    id: 4,
    name: "Chulos Design",
    company: "Diseño de Interiores",
    comment: "Transformaron nuestra visión en un sitio web fluido, estético y super intuitivo. Su acompañamiento y atención al detalle durante todo el desarrollo fue excelente.",
    stars: 5,
    logo: "https://res.cloudinary.com/do87isqjr/image/upload/w_400,f_auto,q_auto/v1761247540/Logo_zlwxg7.png"
  }
];

export const Opinions = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <OpinionsWrapper ref={containerRef}>
      <Suspense fallback={<div style={{position: 'absolute', width: '100%', height: '100%', background: '#05080f'}} />}>
        <GalaxyBackground isInView={isInView} />
      </Suspense>

      <Reveal as="h2">
        Lo que dicen nuestros <span>clientes</span>
      </Reveal>

      <RevealGroup className="testimonials-grid">
        {testimonialsData.map((item) => (
          <TestimonialCard
            key={item.id}
            href="https://maps.app.goo.gl/MuDzaEkscywn51hK8"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            <div className="card-header">
              <div className="client-avatar">
                <img src={item.logo} alt={item.name} />
              </div>
              <div className="client-info">
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>
            </div>
            
            <div className="stars-row">
              {[...Array(item.stars)].map((_, i) => (
                <StarIcon key={i} className="star-icon" />
              ))}
            </div>

            <p className="comment-text">"{item.comment}"</p>
          </TestimonialCard>
        ))}
      </RevealGroup>
    </OpinionsWrapper>
  );
};

export default Opinions;
