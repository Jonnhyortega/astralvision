import styled from "styled-components";
import { Link } from "react-router-dom";
import defaultBckgImg from "../../imgs/BackgroundHero/backHero6.webp";

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  opacity: 0.9; 
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px) saturate(200%);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const Text = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: var(--funnel);
  filter: drop-shadow(1px 1px 1px black);
  text-align: center;
`;

export const StyledLink = styled(Link)`
  position: relative;
  z-index: 2;
  padding: 20px 30px;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease;
  background: var(--third);
  color: white;
  margin: 3em auto;
  font-weight: 600;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    background: var(--primary);
    color: var(--third);
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
