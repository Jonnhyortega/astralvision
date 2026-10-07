import ContactForm from "../../components/ContactForm/ContactForm";
import styled from "styled-components";
import SocialContact from "../../components/SocialContact/SocialContact";
import SEO from "../../components/SEO/SEO";

const ContactContainer = styled.section`
  width: 100%;
  min-height: 90vh ;
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  padding: 80px 20px 40px;
  overflow: hidden;

  h2 {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: -0.02em;
    color: white;
    text-align: center;
    margin-top: 2rem;
    position: relative;
    z-index: 10;
    text-shadow: 0 0 10px rgba(0, 180, 216, 0.5);
  }

  @media (max-width: 768px) {
    padding: 110px 1.5rem 40px;
    h2 {
      font-size: 2.2rem;
      margin-top: 0.5rem;
    }
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-sans);
  background: linear-gradient(90deg, #ffffff, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.15rem;
  line-height: 1.5;
  max-width: 650px;
  font-weight: 500;
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 10;
  padding: 0 1rem;
  
  @supports (-webkit-background-clip: text) {
    background: linear-gradient(90deg, #ffffff, #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Contact = ({ useSEO = true }) => {
  return (
    <ContactContainer>
      {useSEO && (
        <SEO 
          title="Contacto | Astral Vision"
          description="¡Hablemos de tu proyecto! Contáctanos para cotizaciones de sitios web, tiendas virtuales y estrategias digitales."
        />
      )}

      <h2>Conectá con nosotros</h2>
      <Subtitle>¿Listo para escalar las ventas de tu negocio? Hablemos hoy mismo y armamos tu propuesta.</Subtitle>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SocialContact />
      </div>
    </ContactContainer>
  );
};

export default Contact;
