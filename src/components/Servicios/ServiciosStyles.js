import styled from "styled-components";

export const ServiciosContainer = styled.section`
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    color: var(--third);
    margin-bottom: 3rem;
    span {
      color: var(--first-blue);
    }
  }

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s all;
    z-index: 10;
  }

  .arrow-left:hover,
  .arrow-right:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .arrow-left {
    left: 15px;
  }

  .arrow-right {
    right: 15px;
  }

  .cards-container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
  }

  @media (max-width: 868px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.02);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 40%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }

  @media (max-width: 868px) {
    height: auto;
    flex-direction: column;
  }
`;

export const BgImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: 0;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  width: 60%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 868px) {
    width: 100%;
    padding: 2rem;
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
`;

export const CardText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
`;

export const CtaButton = styled.a`
  margin-top: 1rem;
  background-color: var(--third);
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: #0077b6;
  }

  @media (max-width: 868px) {
    margin: 0 auto;
  }
`;
