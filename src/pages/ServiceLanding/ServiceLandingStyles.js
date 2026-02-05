
import styled, { keyframes } from "styled-components";

// Animación de flotación
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 180, 216, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(0, 180, 216, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 180, 216, 0); }
`;

export const PageContainer = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  font-family: var(--titilium);
  overflow-x: hidden;
`;

export const HeroSection = styled.section`
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${props => props.bgImage}) no-repeat center center/cover;
    opacity: 0.4;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.95) 100%);
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 900px;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(90deg, #fff, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #d0d0d0;
  margin-bottom: 2.5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #0077b6 0%, #00b4d8 100%);
  color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 0 20px rgba(0, 180, 216, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 180, 216, 0.6);
  }
`;

export const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  
  span {
    color: var(--third);
  }
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--third);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #aaa;
    line-height: 1.6;
  }
`;

export const SolutionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const VisualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px; /* Altura fija para centrado */
`;

export const FloatingIconWrapper = styled.div`
  font-size: 8rem;
  color: #fff;
  filter: drop-shadow(0 0 30px rgba(0, 180, 216, 0.6));
  animation: ${float} 4s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Circulo decorativo de fondo */
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0,180,216,0.2) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
    z-index: -1;
    animation: ${pulse} 3s infinite;
  }

  svg {
    z-index: 2;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  text-align: left; /* Asegurar alineación izquierda incluso en móvil si se prefiere */

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #ddd;
    font-size: 1.1rem;

    &::before {
      content: '✓';
      color: var(--third);
      font-weight: bold;
      margin-right: 1rem;
      min-width: 20px;
    }
  }
`;

export const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-start;

  .step-number {
    font-size: 4rem;
    font-weight: 900;
    color: rgba(255,255,255,0.05);
    margin-right: 1.5rem;
    line-height: 1;
    min-width: 60px;
  }

  div {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--third);
    }
    p {
      color: #aaa;
    }
  }
`;

export const FinalCTA = styled.div`
  text-align: center;
  padding: 6rem 1rem;
  background: linear-gradient(180deg, transparent, rgba(0, 119, 182, 0.1));
  
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
