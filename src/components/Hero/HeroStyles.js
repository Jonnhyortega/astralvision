import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000;
`;

export const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2; /* Encima del fondo y overlay, debajo del texto */
  pointer-events: none; /* Para que no bloquee clicks en textos/botones */
  
  /* Habilitar interacción con el canvas si es necesario con esto: */
  /* & > div { pointer-events: auto; } */
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  background-attachment: fixed;
  z-index: 0;
  will-change: transform; /* Optimización para la animación de escala */
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 30% 30%,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const TextContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* 🔹 Fondo sutil para mejorar legibilidad sin tapar el 3D */
  background: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%; /* Hace que el fondo sea más orgánico con el agujero negro */

  h2 {
    margin-top: 6rem ;
    font-size: 2rem;
    font-weight: 600;
    color: #e0e0e0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
  margin: 3.5rem 0 2rem 0;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9); /* Sombra más fuerte */
  position: relative;

  /* 🔹 Línea decorativa */
  &::after {
    content: "";
    display: block;
    width: 140px;
    height: 4px;
    margin: 15px auto 0;
    background: linear-gradient(90deg, #00b4d8, #0077b6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled(motion.p)`
  display: block;
  font-size: 1.2rem;
  color: #eaeaea;
  font-weight: 400;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8); /* Agregada sombra */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MicroText = styled(motion.small)`
  font-size: 1rem;
  color: #bdbdbd;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  .btn-primary,
  .btn-secondary {
    padding: 0.9rem 2rem;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s all ease;
    cursor: pointer;
  }

  .btn-secondary:hover{
    color: black;
  }

  .btn-primary {
    background: linear-gradient(90deg, #0077b6, #00b4d8);
    color: #fff;
    box-shadow: 0 4px 12px rgba(0, 136, 255, 0.35);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 136, 255, 0.45);
    }
  }

  .btn-secondary {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: var(--third);
      transform: scale(1.05);
    }
  }
`;

export const WhatsappFloat = styled.a`
  position: fixed;
  bottom: 60px;
  right: 16px;
  color: white;
  border-radius: 50%;
  padding: 14px;
  font-size: 1.8rem;
  z-index: 1000;
  transition: 0.3s ease;
  background: transparent ;
  img{
      /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
      background: transparent ;
    &:hover {
      transform: scale(1.1);
    }
  }


  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1.6rem;
  }
`;
