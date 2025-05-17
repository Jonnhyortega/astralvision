import styled from "styled-components";

export const TechnologiesContent = styled.section`
  width: 100%;
  bottom: 0;
  margin: 4rem 0 0 0;
  padding: 5rem 0 8rem 0;
  min-height: 100vh;

  h3 {
    font-size: 3rem;
    width: 100%;
    padding: 2rem;
    text-align: center;
    margin-bottom: 3rem;
    font-family: var(--titilium);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    position: relative;
    /* *{border:1px solid gold;} */
  }

  .content-img {
  }

  .img-technologies {
    padding: 2rem;
    width: 11rem;
    height: 11rem;
    filter: drop-shadow(1px 1px 2px black);
    transition: 0.5s all;

    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(1px 1px 2px var(--third));
    }
  }
`;
