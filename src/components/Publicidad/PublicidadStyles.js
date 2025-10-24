import styled from "styled-components";

export const PubliWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #0f141a 0%, #111d29 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    color: var(--third);
    font-family: var(--funnel);
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

    span {
      color: var(--primary);
    }

    @media (max-width: 768px) {
      font-size: 2.3rem;
    }
  }

  p {
    font-family: var(--roboto);
    font-size: 1.2rem;
    max-width: 900px;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #dcdcdc;
    text-align: center;
    strong {
      color: white;
      font-weight: 700;
    }

    &.highlight {
      color: var(--third);
      font-weight: 600;
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 1.05rem;
      width: 90%;
    }
  }

  button {
    margin-top: 2.5rem;
    padding: 14px 30px;
    background: var(--third);
    border: none;
    border-radius: 10px;
    color: white;
    font-family: var(--funnel);
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);

    &:hover {
      background: var(--primary);
      color: var(--third);
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 480px) {
      width: 80%;
      font-size: 1rem;
    }
  }

  /* ✨ Elemento decorativo opcional (luz de fondo animada) */
  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 153, 255, 0.2),
      transparent 70%
    );
    top: -100px;
    right: -150px;
    filter: blur(80px);
    animation: pulse 8s infinite alternate;
  }

  @keyframes pulse {
    from {
      opacity: 0.3;
      transform: scale(1);
    }
    to {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
`;
