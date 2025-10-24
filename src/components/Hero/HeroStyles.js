import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid var(--third);
  color: #fff;

  @media (max-width: 768px) {
    height: 85vh;
    padding: 2rem 0;
  }
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
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 2rem;

  h2 {
    margin-top: 6rem ;
    font-size: 1.5rem;
    font-weight: 600;
    color: #e0e0e0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Title = styled(motion.p)`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
  margin: 1.5rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
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

export const Subtitle = styled(motion.small)`
  display: block;
  font-size: 1.2rem;
  color: #eaeaea;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MicroText = styled(motion.p)`
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
    border-radius: 50px;
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
  bottom: 15px;
  right: 25px;
  color: white;
  border-radius: 50%;
  padding: 14px;
  font-size: 1.8rem;
  z-index: 1000;
  transition: 0.3s ease;

  img{
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1.6rem;
  }
`;
