import styled from "styled-components";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FooterContainer, SocialLinks, Copyright } from "./FooterStyles";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <FooterContainer>

      <SocialLinks>
        <h3>Nuestras redes</h3>
        <div>
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
        </div>
      </SocialLinks>

      <div className="footer-info">
        <h3>Desarrollo de software</h3>
        <span>
          Brindamos soluciones personalizadas para impulsar tu presencia online.
        </span>
      </div>

      <div className="footer-contact">
        <h3>Contacto</h3>
        <ul>
          <li>
            Ciudad Autonoma de Buenos Aires
            <MdLocationOn style={{marginLeft: "20px", color: "red", fontSize: "1.2rem"}}/>
          </li>
          <li>
            <a href="mailto:astralvisionestudio@gmail.com">
              astralvisionestudio@gmail.com
            </a>
          </li>
          <li>
            <a href="https://wa.link/v7mgfm">+54 11 5010-9592</a>
          </li>
        </ul>
      </div>

      <Copyright>
        <h1>Astral Vision.</h1> {new Date().getFullYear()}©
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
