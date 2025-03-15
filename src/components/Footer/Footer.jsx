import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const FooterContainer = styled.footer`
  background-color: var(--primary);
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  img {
    width: 35px;
    border-radius: 50%;
    border: 1px solid var(--third);
    position: absolute;
    left: 5px;
    top: -20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100px;
  
  a {
    color: var(--third);
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.4s ease;
    &:hover {
      color: black;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: black;
  letter-spacing: 2px;
  
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://wa.link/uj2tlr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/astralvisionco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573859531556"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </SocialLinks>
      <Copyright>
        © 2025 <strong>Astral Vision.</strong> Todos los derechos reservados{" "}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
