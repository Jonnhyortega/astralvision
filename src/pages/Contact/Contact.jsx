import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import styled from "styled-components";
import bckgImg from "../../imgs/BackgroundContact/bckgContact1.jpg";
import { Overlay } from "../../components/Hero/HeroStyles";

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
  // background: rgb(34, 34, 34);
  background-image: url(${bckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 2em 0 6em 0;
  // box-shadow: 1px 1px 25px 15px rgb(34, 34, 34);

`;

const Contact = () => {
  return (
    <ContactContainer>
      <Overlay />
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
