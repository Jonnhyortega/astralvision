import styled from "styled-components";
import img from "../../imgs/BackgroundHWDI/bckgHWDI.webp";

export const WrapperHWDI = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 25px;
  padding: 160px 50px;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: -1;
  }

  h2 {
    grid-column: 1 / -1;
    text-align: center;
    font-family: var(--funnel);
    font-size: 3.2em;
    font-weight: 900;
    color: white;
    text-shadow: 1px 1px 4px black;
    margin-bottom: 3rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background-color: var(--third);
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .card {
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 12px;
    min-height: 350px;
    width: 100%;
    max-width: 500px;
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    transition: 0.4s all;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
    }

    img {
      width: 85px;
      height: 85px;
      margin: 10px 0;
      filter: drop-shadow(1px 1px 3px black);
      transition: 0.3s all;
    }

    .title {
      color: white;
      font-size: 1.8rem;
      margin-bottom: 10px;
      border-bottom: 2px solid transparent;
      text-align: center;
      transition: 0.3s all;
    }

    .info {
      text-align: center;
      font-size: 1.1rem;
      font-weight: 400;
      color: #c4c4c4;
      padding: 1rem;
      transition: color 0.3s ease;
    }

    &:hover .title {
      border-bottom: 2px solid var(--third);
    }
    &:hover .info {
      color: #fff;
    }
  }
`;
