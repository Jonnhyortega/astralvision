import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import logo from "../../imgs/LogoAstral.jpeg";
import { useLocation } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: transparent;
  color: white;
  padding: 20px;
  text-align: center;

  img {
    width: 35px;
    border-radius: 50%;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
  font-weight: bold;
    &:hover {
      color: var(--color1);
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
    color: white;
    letter-spacing: 2px;
`;

const Footer = () => {
  const location = useLocation();
  const pathActual = location.pathname;

  return (
    pathActual != "/promocion" && (
      <FooterContainer>
        <SocialLinks>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialLinks>
        <Copyright>
          © 2024 <strong>Astral Vision.</strong> Todos los derechos reservados{" "}
        </Copyright>
        <img src={logo} alt="Logo empresa" />
      </FooterContainer>
    )
  );
};

export default Footer;
