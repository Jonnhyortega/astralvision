import ContactForm from "../../components/ContactForm/ContactForm";
import styled from "styled-components";
import SocialContact from "../../components/SocialContact/SocialContact";

const ContactContainer = styled.section`
  width: 100%;
  min-height: 60vh ;
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
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      {/* <ContactForm /> */}
      <h2>Conectá con nosotros</h2>
      <SocialContact />
    </ContactContainer>
  );
};

export default Contact;
