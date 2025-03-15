import { LogoComponent } from "../LogoComponent/LogoComponent";
import {
  HeroContainer,
  Background,
  Overlay,
  StyledLink,
  Text,
} from "./HeroStyles";
import { motion } from "framer-motion";

export const Hero = () => {
  const handleNavigate = () => {
    window.open("wa.link/v7mgfm", "_blank");
  };

  const texto = "Agencia de diseño web y marketing digital.".split("");

  return (
    <HeroContainer>
      <Background className="animate__animated animate__backInDown" />
      <Overlay className="animate__animated animate__backInUp" />
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
      <StyledLink onClick={handleNavigate}>Contactar</StyledLink>
    </HeroContainer>
  );
};

export default Hero;
