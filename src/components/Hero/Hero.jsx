import { LogoComponent } from "../LogoComponent/LogoComponent";
import { HeroContainer, Background, Overlay, Text } from "./HeroStyles";
import { motion } from "framer-motion";

export const Hero = () => {
  const texto = "Agencia de diseño web y marketing digital.".split("");

  return (
    <HeroContainer >
      {/* className="animate__animated animate__pulse" */}
      {/* <Background  /> */}
      <Overlay />
      <LogoComponent />

      <Text>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {texto.map((letra, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.05 },
              }}
            >
              {letra}
            </motion.span>
          ))}
        </motion.div>
      </Text>
      <a
        className="btn-contactar"
        href="https://wa.link/v7mgfm"
        target="_blank"
      >
        Contactar
      </a>
    </HeroContainer>
  );
};

export default Hero;
