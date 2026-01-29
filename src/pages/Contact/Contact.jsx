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
  padding: 40px 0;
  background: var(--third);
  background: black;

  h2{
    font-weight: 900 ;
    font-size: 3rem ;
    color: white ;
    text-align: center ;
    margin-top: 3rem ;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <SEO 
        title="Contacto | Astral Vision"
        description="¡Hablemos de tu proyecto! Contáctanos para cotizaciones de sitios web, tiendas virtuales y estrategias digitales."
      />

      {/* <ContactForm /> */}
      <h2>Conectá con nosotros</h2>
      <SocialContact />
    </ContactContainer>
  );
};

export default Contact;
