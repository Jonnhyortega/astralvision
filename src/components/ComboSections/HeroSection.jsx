// src/components/HeroSection.js
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: transparent;

    padding: 2em;

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

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 20px;
  background-color: #f39c12;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #d17c07;
  }
`;

export const HeroSection = ({ navigateToSection }) => (
  <Section>
    <Overlay />
    <Heading>¿Te gustaría hacer crecer tu emprendimiento?</Heading>
    <Text>Con nuestros servicios de marketing digital y e-commerce, puedes lograr el crecimiento que deseas.</Text>
    <Button onClick={() => navigateToSection(1)}>Conoce la Solución</Button>
  </Section>
);

export default HeroSection;
