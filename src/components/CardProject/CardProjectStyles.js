import styled from "styled-components";

export const CardProjectWrapper = styled.div`
  width: 100%;
  padding: 45px 15px;

  h3 {
    font-size: 3rem;
    color: #333;
    margin: 35px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    width: 100%;
  }

  img {
    margin-top: 3rem;
    width: 80%;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 10px 5px black;
    transform: skew(1deg, 2deg);
  }

  span {
    margin-top: 3rem;
    width: 80%;
  }

  a {
    font-size: 1rem;
    margin-top: 4rem;
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 5px black;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 1px 1px 10px 5px white;
      transform: skew(-10deg, 10deg);
    }
  }

  @media (max-width: 568px) {
    h3 {
      font-size: 2rem;
    }

    img {
      width: 100%;
      margin-top: 0;
    }

    span {
      font-size: 1rem;
      width: 90%;
    }

    a {
      margin-top: 2rem;
    }
  }
`;
