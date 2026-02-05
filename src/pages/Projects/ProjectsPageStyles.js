
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2rem;
  background-color: #050511; 
  background-image: radial-gradient(circle at 50% 0%, #1a1a40 0%, #000 70%);
  font-family: var(--titilium);
  overflow-x: hidden;
`;

export const Headline = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 5rem;
  font-family: var(--oswald);
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #00b4d8;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectCard = styled(motion.div)`
  background: rgba(20, 20, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

export const CardHeader = styled.div`
  height: 200px;
  width: 100%;
  background: ${(props) => props.bg || '#111'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  /* Efecto de brillo sutil sobre el fondo */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%);
  }

  /* Ruido/grano opcional para textura */
  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    z-index: 2;
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
    transition: transform 0.4s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1) rotate(-2deg);
  }
`;

export const CardBody = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-family: var(--oswald);
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-weight: 300;
  flex-grow: 1; /* Empuja el botón al fondo */
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.05);
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.hoverColor || '#fff'};
    color: ${(props) => props.isDark ? '#fff' : '#000'};
    border-color: ${(props) => props.hoverColor || '#fff'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${(props) => props.shadowColor || 'rgba(255,255,255,0.2)'};
  }
`;

