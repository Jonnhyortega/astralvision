// src/components/CTASection.js
import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Section = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url("/Imgs/BackgroundCTA/backCTA.jpeg") center/cover no-repeat;
  animation: ${slideIn} 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Heading = styled.h2`
  color: white;
  font-size: 2rem;
  z-index: 2;
`;

const Text = styled.p`
  color: #ddd;
  font-size: 1.2rem;
  z-index: 2;
`;

const StyledLink = styled.a`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 20px;
  background-color: #f39c12;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #d17c07;
  }
`;

export const CTASection = () => (
  <Section>
    <Overlay />
    <Heading>¡El Combo Perfecto para Tu Negocio!</Heading>
    <Text>
      Transforma tu presencia en línea con nuestro combo de landing page +
      tienda online a un precio muy accesible
    </Text>
    <StyledLink href="https://wa.link/71nhsh" target="_blank">
      Hablar con un asesor
    </StyledLink>
  </Section>
);

export default CTASection;
