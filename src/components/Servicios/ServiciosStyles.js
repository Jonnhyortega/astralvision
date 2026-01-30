import styled from "styled-components";

export const ServiciosContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 2rem;
  background: black; /* Fallback */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  /* Ensure content is above background */
  h2, div, a {
    position: relative;
    z-index: 10;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    color: #fff;
    letter-spacing: 1px;
    line-height: 1.2;

    span {
      background: linear-gradient(90deg, var(--secondary), var(--third));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      /* Eliminamos sombra pesada para limpieza visual */
      filter: drop-shadow(0 0 8px rgba(0, 180, 216, 0.3));
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 2.5rem;
    }
  }
`;



export const ServiciosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.3rem;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    /* transform: translateY(-8px) scale(1.01); */
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 15px rgba(0, 120, 255, 0.15);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.8rem;
  color: var(--first-blue);
  margin-bottom: 1rem;
  transition: 0.3s;

  ${Card}:hover & {
    transform: scale(1.1);
    color: #0099ff;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #fff;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #cfcfcf;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const CtaButton = styled.a`
  align-self: center;
  /* Cambio de fondo oscuro a un gradiente vibrante */
  background: linear-gradient(90deg, #0077b6 0%, #00b4d8 100%);
  color: white;
  font-weight: 700;
  border-radius: 5px;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.05); // Efecto de elevación
    background: linear-gradient(90deg, #0096c7, #0077b6);
    box-shadow: 0 6px 20px rgba(0, 136, 255, 0.5); // Sombra más intensa
  }
`;
