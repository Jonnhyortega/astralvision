import styled from "styled-components";

export const ServiciosContainer = styled.section`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 3rem;
  /* border: 1px solid gold;
  * {
    border: 1px solid red;
  } */

  .arrow-left {
    position: absolute;
    top: 50%;
    left: 4px;
    padding: 0 5px;
    height: 50px;
    width: 30px;
    z-index: 1;
    border-radius: 50%;
  }
  .arrow-right {
    border-radius: 50%;
    padding: 0 5px;
    position: absolute;
    top: 50%;
    height: 50px;
    width: 30px;
    z-index: 1;
    right: 4px;
  }

  .arrow {
    cursor: pointer;
    transition: 0.2s all;
    width: 35px;
  }

  .arrow:hover {
    box-shadow: 1px 1px 5px grey;
  }

  h2 {
    color: black;
    text-align: center;
    width: 100%;
    font-size: 3.5em;
    padding: 2rem 0 4rem 0;
    font-family: var(--funnel);
    font-weight: 900;
    color: var(--third);
    filter: drop-shadow(1px 1px 1px grey);
  }

  .cards-container {
    width: 87%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 868px) {
    width: auto;

    .cards-container {
      width: 100%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  position: relative;
  overflow: hidden;
  height: 400px;
  width: 100%;
  margin-bottom: 2rem;
  &:hover .text-title {
    color: #00acc1;
    transform: translateY(-5px);
    text-decoration: underline;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px) saturate(180%);
    -webkit-backdrop-filter: blur(2px) saturate(180%);
    background-color: rgb(0, 0, 0, 0.9);
    z-index: -1;
  }

  @media (max-width: 868px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    border-radius: none;
  }
  @media (max-width: 868px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    border-radius: none;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 90%;
  z-index: 1;

  @media (max-width: 868px) {
    width: 100%;
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 900;
  transition: color 0.4s ease, transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  color: white;
  line-height: 1.3;
  font-weight: 300;
  filter: drop-shadow(1px 1px 5px black);
`;
