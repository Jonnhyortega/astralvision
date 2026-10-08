
import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2rem;
  background-color: #050511; 
  background-image: radial-gradient(circle at 50% 0%, #1a1a40 0%, #000 70%);
  font-family: var(--font-sans);
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 6.5rem 1.5rem 3rem;
  }
`;

export const Headline = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 4rem;
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.02em;
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

// Color de acento de cada proyecto (color.button del array); sin acento queda el gris neutro.
const tint = (accent, pct, fallback) =>
  accent ? `color-mix(in srgb, ${accent} ${pct}%, transparent)` : fallback;

export const ProjectCard = styled(motion.div)`
  background:
    radial-gradient(120% 60% at 50% 0%, ${({ $accent }) => tint($accent, 22, "transparent")} 0%, transparent 70%),
    rgba(20, 20, 30, 0.6);
  border: 1px solid ${({ $accent }) => tint($accent, 25, "rgba(255, 255, 255, 0.05)")};
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  height: 100%;
  /* transform lo maneja framer (hoverLift); acá solo sombra y borde */
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  &:hover {
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${({ $accent }) => tint($accent, 20, "transparent")};
    border-color: ${({ $accent }) => tint($accent, 60, "rgba(255, 255, 255, 0.15)")};
  }
`;

export const CardHeader = styled.div`
  height: 220px;
  width: 100%;
  /* color.background del proyecto; si no tiene, se arma con su acento */
  background: ${({ $bg, $accent }) =>
    $bg && $bg !== "transparent"
      ? $bg
      : `linear-gradient(135deg, ${tint($accent, 85, "#222")}, #000)`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  .project-logo {
    max-width: 60%;
    max-height: 70%;
    object-fit: contain;
    border-radius: 12px;
    filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.45));
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  ${ProjectCard}:hover & .project-logo {
    transform: scale(1.05);
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
    background: ${(props) => props.$hoverColor || '#fff'};
    color: ${(props) => props.$isDark ? '#fff' : '#000'};
    border-color: ${(props) => props.$hoverColor || '#fff'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${(props) => props.$shadowColor || 'rgba(255,255,255,0.2)'};
  }
`;

