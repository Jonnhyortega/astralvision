import styled from "styled-components";
import img from "../../imgs/BackgroundHWDI/bckgHWDI.webp";

export const WrapperHWDI = styled.section`
  width: 100%;
  position: relative;
  /* Removed grid from specific wrapper to allow full width background */
  display: flex;
  justify-content: center;
  padding: 60px 1.5rem; /* Mobile padding */
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
  box-sizing: border-box;
  overflow-x: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.82);
    z-index: -1;
  }
  
  @media (min-width: 768px) {
    padding: 80px 2rem;
  }
  
  @media (min-width: 1100px) {
    padding: 100px 2rem;
  }
`;

export const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 2rem;
  
  /* Tablet */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    .card:last-of-type {
      grid-column: 1 / -1;
      max-width: 500px;
    }
  }

  /* Desktop */
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1400px; /* Constrain CONTENT width, not background */
    gap: 3rem;

    .card:last-of-type {
      grid-column: 1 / -1;
      flex-direction: row; 
      align-items: center;
      justify-content: center;
      gap: 4rem;
      padding: 3rem 4rem;
      max-width: 100%;
      min-height: 250px;

      img {
        width: 110px;
        height: 110px;
        margin: 0;
        filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));
      }

      div {
        text-align: left;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .title {
        text-align: left;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        background: linear-gradient(90deg, #fff, var(--third));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .info {
        text-align: left;
        font-size: 1.25rem;
        padding: 0;
        max-width: 800px;
      }
    }
  }

  h2 {
    grid-column: 1 / -1;
    text-align: center;
    font-family: var(--funnel);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    color: white;
    text-shadow: 1px 1px 4px black;
    margin-bottom: 3rem;
    position: relative;
    padding: 0 1rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--third);
      border-radius: 4px;
    }
  }

  .card {
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border-radius: 5px;
    min-height: 300px;
    width: 100%;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    background-color: rgba(20, 25, 35, 0.7); 
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
      border-color: rgba(255, 255, 255, 0.2);
      background-color: rgba(25, 30, 45, 0.8);
    }

    img {
      width: 70px;
      height: 70px;
      margin: 1.5rem 0 0.5rem;
      filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.5));
      transition: 0.3s all;
      
      @media (min-width: 768px) {
        width: 90px;
        height: 90px;
      }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .title {
      color: white;
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      text-align: center;
      transition: 0.3s all;
      font-family: var(--oswald);
      line-height: 1.3;

      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }

    .info {
      text-align: center;
      font-size: 1rem;
      font-weight: 300;
      color: #dfdfdf;
      line-height: 1.6;
      padding: 0;
    }
  }
`;
