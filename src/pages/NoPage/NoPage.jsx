import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${fadeIn} 0.5s ease-in-out;

  h1 {
    font-size: 4rem;
    color: #ff4d4d;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 2rem;
  }

  button {
    background-color: #ff4d4d;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #e60000;
    }
  }
`;

export const NoPage = () => {
  return (
    <ErrorMessage>
      <h1>404</h1>
      <p>Oops! Página no encontrada.</p>
      <button>Volver al inicio</button>
    </ErrorMessage>
  );
};

export default NoPage;