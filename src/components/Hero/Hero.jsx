import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Suspense, useRef, lazy } from "react";
import {
  HeroContainer,
  Background,
  Overlay,
  TextContent,
  Title,
  Subtitle,
  MicroText,
  ButtonsContainer,
  WhatsappFloat,
  CanvasContainer,
} from "./HeroStyles";
import heroBackground from "../../imgs/BackgroundHero/backHero6.webp";

// Lazy load Three.js scene to reduce initial bundle size
const HeroScene = lazy(() => import("./HeroScene"));

export const Hero = () => {
  const canvasRef = useRef(null);
  const isInView = useInView(canvasRef, { amount: 0.1 });

  return (
    <HeroContainer>
      {/* 🔹 Fondo con animación sutil */}
      <Background
        as={motion.div}
        // style={{ backgroundImage: `url(${heroBackground})` }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <Overlay />

      {/* 🔹 Objeto 3D: Astral Object (Soft) */}
      <CanvasContainer
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <Suspense fallback={null}>
          {isInView && <HeroScene isInView={isInView} />}
        </Suspense>
      </CanvasContainer>

      {/* 🔹 Texto central: LCP Optimized (Sin opacidad inicial 0 en contenedor) */}
      <TextContent>
        {/* <motion.h2 ... se mantiene comentado ... */}

        <Title>
          Impulsamos tu negocio con tecnología, diseño y marketing que generan
          resultados.
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Creamos sitios web, tiendas online y sistemas empresariales personalizados.
        </Subtitle>

        <MicroText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Trabajamos con emprendedores, pymes y empresas que quieren crecer en el mundo digital.
        </MicroText>

        <ButtonsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <a
            className="btn-primary"
            href="https://wa.me/541176513862?text=Hola!%20Vi%20sus%20servicios%20en%20Astral%20Vision%20y%20quiero%20una%20cotización%20para%20mi%20sitio%20web."
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero mi sitio web
          </a>

          <NavLink className="btn-secondary" to="/projects">
            Ver proyectos
          </NavLink>
        </ButtonsContainer>
      </TextContent>

      {/* 🔹 Botón flotante de WhatsApp */}
      <WhatsappFloat
        href="https://wa.me/541176513862?text=Hola%20Astral%20Vision!%20Quiero%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/icons/whatsapp.png" alt="" />
      </WhatsappFloat>
    </HeroContainer>
  );
};

export default Hero;
