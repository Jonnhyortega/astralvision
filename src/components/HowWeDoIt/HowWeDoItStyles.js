import styled from "styled-components";
import img from "../../imgs/BackgroundHWDI/bckgHWDI.webp";
export const WrapperHWDI = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  padding: 160px 30px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    h3 {
      font-size: 2.5rem;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  h2 {
    position: absolute;
    top: 10px;
    color: black;
    text-align: center;
    width: 100%;
    font-size: 3.5em;
    margin: 3rem 0;
    font-family: var(--funnel);
    font-weight: 900;
    color: white;
    filter: drop-shadow(1px 1px 1px black);
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  div {
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    padding: 15px 0;
    transition: 0.3s all;
    border-radius: 5px;

    img {
      transition: 0.3s all;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: white;
        font-size: 2rem;
        padding: 10px;
        border-bottom: 2px solid grey;
        text-align: center;
        transition: 0.3s all;

        @media (max-width: 768px) {
          font-size: 1.7rem;
        }
      }

      p {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 500;
        color: #c4c4c4;
        padding: 2rem;
        transition: 0.3s all;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  div:hover .img {
    filter: drop-shadow(1px 1px 5px grey);
    transform: scale(1.02);
  }

  div:hover .title {
    border-bottom: 2px solid white;
  }
  div:hover .info {
    color: white;
  }
`;
