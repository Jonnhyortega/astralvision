import React from "react";
import { HeroContainer, Background, Overlay, Title, Subtitle, StyledLink, Text } from "./HeroStyles";

export const Hero = () => {
  const handleNavigate = () => {
    window.open("https://wa.link/ba9197", "_blank");
  };

  return (
    <HeroContainer>
      <Background /> {/* Fondo con animación */}
      <Overlay />
      <Title>Astral Vision Estudio</Title>
      <Subtitle>Impulsá tu emprendimiento con un diseño atractivo y funcional</Subtitle>
      <Text>Agencia de Diseño Web</Text>
      <StyledLink onClick={handleNavigate}>Solicita tu paquete de Landing Page + Tienda Online</StyledLink>
    </HeroContainer>
  );
};

export default Hero;
