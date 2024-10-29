import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../imgs/LogoAstral.jpeg";
const ModalFormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);
  .btns {
    display: flex;
  }
  div {
    background-color: transparent;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    widht: 500px;
  }

  div > p {
    color: white;
    font-weight: 700;
    font-size: 1.4em;
    width: 50%;
    margin: 0 auto;
  }

  div > img {
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
  }

  div > button {
    border: 1px solid white;
    border-radius: 10px;
    width: 200px;
    margin: 0 auto;
    font-weight: 500;
    padding: 1em;
    border-radius: 2px;
    background: var(--greenFull1);
    color: white;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;
export default function ModalMessage({ updateModalOpen }) {
  const hookTo = useNavigate();
  const handleClick = () => {
    hookTo("/");
    updateModalOpen(false);
  };

  const handleWsp = () => {
    window.open("https://wa.link/ba9197", "_blank");
  };

  return (
    <ModalFormWrapper>
      <div>
        <img src={logo}></img>
        <p>
          ¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto
          contigo lo antes posible. Gracias por tu interés.
        </p>
        <div className="btns">
          <button onClick={handleClick}> Ir a inicio</button>
          <button onClick={handleWsp}>Contactar por whatsapp</button>
        </div>
      </div>
    </ModalFormWrapper>
  );
}
