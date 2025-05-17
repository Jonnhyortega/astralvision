import styled from "styled-components";
import defaultBckgImg from "../../imgs/BackgroundHero/backHero6.webp";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-right: 5%;
  z-index: 100;
  border-bottom: 4px solid var(--third);
  p {
    z-index: 4;
    color: black;
    font-size: 4rem;
    font-weight: bolder;
    font-family: var(--roboto);
    text-align: right;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    align-items: center;
    height: 80vh;

    p {
      font-size: 2.6rem;
      text-align: center;
    }
  }

  .btn-contactar {
    position: relative;
    z-index: 2;
    padding: 7px 25px;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
    background: var(--third);
    color: white;
    font-weight: 600;
    &:hover {
      transform: scale(1.1);
      transition: 0.2s;
      background: var(--primary);
      color: var(--third);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      width: 200px;
      text-align: center;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url(${defaultBckgImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; */
  opacity: 0.9;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* backdrop-filter: blur(1px) saturate(100%); */
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
`;

export const Text = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 2rem;
  margin-top: 160px;
  width: 90%;
  font-weight: bolder;
  font-family: var(--titilium);
  filter: drop-shadow(1px 1px 1px black);
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;

    margin-top: 130px;
  }
`;
