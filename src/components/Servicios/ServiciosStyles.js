import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ServiciosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  width: 100%;
  animation: ${fadeIn} 0.8s ease forwards;


`;

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid #e0e0e0;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 0.8s ease forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.8s 0.2s ease forwards;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 50%;
  animation: ${fadeIn} 0.8s 0.4s ease forwards;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: #2c3e50;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 700;
  line-height: 1.3;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(0, 150, 136, 0.8);
  transition: color 0.3s ease, transform 0.2s ease;
  animation: ${fadeIn} 0.8s 0.6s ease forwards;

  &:hover {
    color: #009688;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const CardText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s 0.8s ease forwards;
`;

export const CardButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #00c853;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  animation: ${fadeIn} 0.8s 1s ease forwards;

  &:hover {
    background-color: #009624;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;
