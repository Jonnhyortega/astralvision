import React from "react";
import {
  HeroContainer,
  Background,
  Overlay,
  Title,
  Subtitle,
  StyledLink,
  Text,
} from "./HeroStyles";

export const Hero = () => {
  const handleNavigate = () => {
    window.open("", "_blank");
  };

  return (
    <HeroContainer>
      <Background />
      <Overlay />
      <Title>Astral Vision Estudio</Title>
      <Subtitle>
        Impulsá tu emprendimiento con un diseño atractivo y funcional
      </Subtitle>
      <Text>Agencia de Diseño Web</Text>
      <StyledLink onClick={handleNavigate}>
        Contactar
      </StyledLink>
    </HeroContainer>
  );
};

export default Hero;
