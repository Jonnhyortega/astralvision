import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
} from "./HeroStyles";
import heroBackground from "../../imgs/BackgroundHero/backHero6.webp";

export const Hero = () => {
  return (
    <HeroContainer>
      {/* 🔹 Fondo con animación sutil */}
      <motion.div
        as={Background}
        style={{ backgroundImage: `url(${heroBackground})` }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <Overlay />

      {/* 🔹 Texto central */}
      <TextContent
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Agencia de diseño web y marketing digital 
        </motion.h2> */}

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Impulsamos tu negocio con tecnología, diseño y marketing que generan
          resultados.
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Creamos sitios web, tiendas online y sistemas empresariales personalizados.
        </Subtitle>

        <MicroText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Trabajamos con emprendedores, pymes y empresas que quieren crecer en el mundo digital.
        </MicroText>

        <ButtonsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            className="btn-primary"
            href="https://wa.me/1122684234?text=Hola!%20Vi%20sus%20servicios%20en%20Astral%20Vision%20y%20quiero%20una%20cotización%20para%20mi%20sitio%20web."
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Quiero mi sitio web
          </a>

          <NavLink className="btn-secondary" to="/projects">
            Ver proyectos
          </NavLink>
        </ButtonsContainer>
      </TextContent>

      {/* 🔹 Botón flotante de WhatsApp */}
      <WhatsappFloat
        href="https://wa.me/541122684234?text=Hola%20Astral%20Vision!%20Quiero%20más%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://img.icons8.com/fluency/48/whatsapp.png" alt="" />
      </WhatsappFloat>
    </HeroContainer>
  );
};

export default Hero;
