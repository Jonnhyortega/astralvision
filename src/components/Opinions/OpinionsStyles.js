import styled from "styled-components";

export const OpinionsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0f141a 0%, #111d29 100%);
  border-top: 2px solid rgba(255, 255, 255, 0.05);
  border-bottom: 2px solid rgba(255, 255, 255, 0.05);

  h2 {
    font-size: 3rem;
    color: white;
    text-align: center;
    font-family: var(--funnel);
    font-weight: 900;
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

  .carousel {
    display: flex;
    flex-wrap: wrap ;
    justify-content: center ;
    align-items: center ;
    gap: 25px;
    cursor: grab;
    padding: 1rem;
  }

  a {
    flex: 0 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    padding: 20px ;
    &:hover {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }
  }

  img {
    width: 400px;
    height: auto;
    border-radius: 12px;
    transition: transform 0.3s ease;

    @media (max-width: 468px) {
      width: 90vw;
    }
  }
`;
