import {
  FooterContainer,
  FooterGrid,
  FooterColumn,
  SocialLinks,
  Copyright,
} from "./FooterStyles";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h3>Nuestras redes</h3>
          <SocialLinks>
            <a href="https://wa.link/iov09z" target="_blank" rel="noreferrer">
              <SiWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/astralvisionco/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573859531556"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="mailto:astralvisionestudio@gmail.com">
              <SiGmail />
            </a>
            {/* <a
              href="https://maps.app.goo.gl/MuDzaEkscywn51hK8"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle />
            </a> */}
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Desarrollo de software</h3>
          <p>
            Creamos soluciones digitales <strong>a medida</strong> para
            potenciar tu presencia online. Desde sitios web modernos hasta
            campañas publicitarias estratégicas.
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Contacto</h3>
          <ul>
            <li>
              <MdLocationOn className="icon-location" />
              Ciudad Autónoma de Buenos Aires
            </li>
            <li>
              <a href="mailto:astralvisionestudio@gmail.com">
                astralvisionestudio@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.link/iov09z" target="_blank" rel="noreferrer">
                +54 11 4193-5710
              </a>
            </li>
          </ul>
        </FooterColumn>
      </FooterGrid>

      <Copyright>
        <hr />
        <p>
          © {new Date().getFullYear()} <strong>Astral Vision Estudio</strong> —
          Diseño y Desarrollo Web Profesional.
        </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
