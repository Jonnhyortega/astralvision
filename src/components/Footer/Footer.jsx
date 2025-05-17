import styled from "styled-components";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const FooterContainer = styled.footer`
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top: 1px solid var(--third);
  background: black;

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
    border-bottom: 2px solid transparent;
    &:hover {
      color: white;
      transform: scale(1.1);
      border-bottom: 2px solid var(--third);
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: white;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  h4 {
    font-size: 1rem;
    font-weight: bolder;
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://wa.link/v7mgfm"
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

        <a href="mailto:astralvisionestudio@gmail.com">
          <SiGmail />
        </a>

        <a href="https://maps.app.goo.gl/MuDzaEkscywn51hK8" target="blank">
          <FaGoogle />
        </a>
      </SocialLinks>

      <Copyright>
        <h4>Astral Vision.</h4> {new Date().getFullYear()}©
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
