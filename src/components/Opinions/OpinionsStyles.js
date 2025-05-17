import styled from "styled-components";

export const OpinionsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 1rem;

  h2 {
    margin-top: 2rem;
    font-size: 3rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      width: 400px;

      &:hover{
        transform: scale(1.05);
        transition: all 0.3s ease;
      }
      @media (max-width: 468px) {
        width: 100%;
      }
    }
  }
`;
