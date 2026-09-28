
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
  height: 220px;
  width: 100%;
  background: ${(props) => props.bg || '#111'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  .browser-frame {
    width: 100%;
    height: 100%;
    background: #0f172a;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    transition: transform 0.4s ease, border-color 0.4s ease;
  }

  ${ProjectCard}:hover & .browser-frame {
    transform: scale(1.02);
    border-color: rgba(0, 180, 216, 0.5);
  }

  .browser-header {
    height: 28px;
    background: #1e293b;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
  }

  .browser-dots {
    display: flex;
    gap: 5px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &.red { background: #ff5f56; }
    &.yellow { background: #ffbd2e; }
    &.green { background: #27c93f; }
  }

  .browser-url {
    font-size: 0.72rem;
    color: #94a3b8;
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 10px;
    border-radius: 8px;
    font-family: var(--font-sans);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
  }

  .browser-screen {
    flex: 1;
    position: relative;
    overflow: hidden;
    background: #090d16;
    display: flex;
    align-items: center;
    justify-content: center;

    img.site-preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: transform 0.5s ease;
    }

    img.logo-preview {
      max-width: 65%;
      max-height: 65%;
      object-fit: contain;
      filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
    }

    .project-badge {
      position: absolute;
      bottom: 8px;
      right: 8px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.4);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
    }
  }

  ${ProjectCard}:hover & img.site-preview {
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
    background: ${(props) => props.hoverColor || '#fff'};
    color: ${(props) => props.isDark ? '#fff' : '#000'};
    border-color: ${(props) => props.hoverColor || '#fff'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${(props) => props.shadowColor || 'rgba(255,255,255,0.2)'};
  }
`;

