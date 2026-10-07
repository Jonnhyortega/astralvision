import { useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { durations, easings, fadeIn, fadeUp } from "../../lib/motion";
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
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const textY = useTransform(scrollY, [0, vh], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, vh], [1, 0.4]);

  return (
    <HeroContainer>
      {/* 🔹 Fondo con animación sutil */}
      <Background />
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
      <TextContent style={reduced ? undefined : { y: textY, opacity: textOpacity }}>
        {/* <motion.h2 ... se mantiene comentado ... */}

        <Title>
          Impulsamos tu negocio con tecnología, diseño y marketing que generan
          resultados.
        </Title>

        <Subtitle
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: durations.base, ease: easings.out }}
        >
          Creamos sitios web, tiendas online y sistemas empresariales personalizados.
        </Subtitle>

        <MicroText
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: durations.slow, ease: easings.out }}
        >
          Trabajamos con emprendedores, pymes y empresas que quieren crecer en el mundo digital.
        </MicroText>

        <ButtonsContainer
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: durations.base, ease: easings.out }}
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
