// HeroStyles.js
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import defaultBckgImg from "../../imgs/BackgroundHero/backHero6.jpg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  padding-right: 5%;
  z-index: 100;

  @media (max-width: 768px) {
    align-items: center;
    padding-right: 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${defaultBckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  animation: ${fadeIn} 1.5s 1.5s ease-in-out forwards;
  z-index: 2;
`;

export const Title = styled.p`
  position: relative;
  z-index: 2;
  font-size: 4.5rem;
  margin-bottom: 20px;
  color: black;
  text-align: right;
  font-family: var(--titilium);
  font-weight: 900;
  -webkit-text-stroke: 1px white;
  animation: ${fadeIn} 1s 2s ease-in-out forwards;
  opacity: 0;
  filter: drop-shadow(1px 1px 5px white);

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: right;
  width: 90%;
  color: white;
  padding: 0 10px;
  animation: ${fadeIn} 1s 2.5s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 1.2rem;
  animation: ${fadeIn} 1s 2.5s ease-in-out forwards;
  opacity: 0;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

const shakeHorizontal = keyframes`
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  z-index: 2;
  padding: 20px 30px;
  font-size: 1.2rem;
  color: black;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 1s 2.5s ease-in-out forwards, ${shakeHorizontal} 1s 3s both;
  opacity: 0;
  background: linear-gradient(
    255deg,
    rgba(0, 227, 80, 1) 0%,
    rgba(150, 255, 156, 1) 81%
  );
  margin: 3em auto;
  font-weight:600;
  
  &:hover {
    transform: translateY(-1px);
    transition: 0.2s;
    background: rgba(150, 255, 156, 0.3);
    filter: drop-shadow(5px 5px 5px white);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 200px;
    text-align: center;
  }
`;
