import styled from "styled-components";

export const PubliWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  padding: 4em 0 4em 1em;

  h3 {
    font-size: 3em;
    font-weight: bolder;
    width: 100%;
    text-align: center;
    font-family: var(--inter);
    color: var(--third);
  }

  span {
    font-family: var(--roboto);
    font-size: 1.2rem;
    width: 80%;

    strong{
      font-weight: bolder;
    }
  }

  button {
    padding: 1em;
    background: transparent;
    border: 1px solid var(--third );
    cursor: pointer;
    border-radius: 3px;
    font-family: var(--funnel);
    font-weight: bold;
    transition: 0.4s all;

    &:hover {
      background: var(--third);
      color: white;
      border: 1px solid transparent;
      transform: translateY(-2px);
    }
  }

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
