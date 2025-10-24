import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../imgs/LogoAstral.webp";
import "ldrs/ring";
import { grid } from "ldrs";
import "animate.css";

grid.register();

const ModalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

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
  }

  div > p {
    color: white;
    font-weight: 700;
    font-size: 1.4em;
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
  const handleClick = () => {
    window.location.reload();
    updateModalOpen(false);
  };
  const [showLoader, setShowLoader] = useState(true);
  const handleWsp = () => {
    window.open("https://wa.link/iov09z", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader((ps) => !ps);
    }, 3000);
  }, []);

  return (
    <ModalFormWrapper>
      {showLoader ? (
        <l-grid size="60" speed="1.5" color="white"></l-grid>
      ) : (
        <div>
          <img
            src={logo}
            className="animate__animated animate__backInLeft"
          ></img>
          <p className="animate__animated animate__backInLeft">
            ¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto
            contigo lo antes posible. Gracias por tu interés.
          </p>
          <div className="btns animate__animated animate__backInLeft">
            {/* <button onClick={handleClick}> Ir a inicio</button> */}
            <button onClick={handleWsp}>Contactar por whatsapp</button>
          </div>
        </div>
      )}
    </ModalFormWrapper>
  );
}
