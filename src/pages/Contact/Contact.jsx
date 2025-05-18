import ContactForm from "../../components/ContactForm/ContactForm";
import styled from "styled-components";

const ContactContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
