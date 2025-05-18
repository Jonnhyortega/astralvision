import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: white;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  padding: 15px 15px 70px 15px;
  /* border-top: 4px solid var(--third);
  * {
    border: 1px solid gold;
  } */

  .footer-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;

    h3 {
      font-family: var(--titilium);
      margin-bottom: 10px;
      width: 100%;
      text-align: left;
    }

    span {
      text-align: left;
      width: 100%;
    }
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 300px;

    h3 {
      font-family: var(--titilium);
      /* margin-bottom: 10px; */
      width: 100%;
      text-align: left;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: start;
        text-align: left;
        width: 100%;

        a {
          text-align: left;
          width: 100%;
          text-decoration: none;
          color: white;

          &:hover {
            color: var(--third);
            transform: scale(1.1);
            transition: 0.2s;
          }
        }
      }
    }
  }

  img {
    width: 35px;
    border-radius: 50%;
    border: 1px solid var(--third);
    position: absolute;
    left: 5px;
    top: -20px;
  }

  h3 {
    font-family: var(--titilium);
    margin-bottom: 10px;
    width: 100%;
  }

  @media (max-width: 868px) {
    padding: 15px;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    gap: 20px;

    h3 {
      text-align: left;
    }

    .footer-contact,
    .footer-info {
      width: 100%;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;

  div {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  a {
    color: var(--third);
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.4s ease;
    border-bottom: 2px solid transparent;
    &:hover {
      color: white;
      transform: scale(1.1);
      border-bottom: 2px solid var(--third);
    }
  }
`;

export const Copyright = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: white;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  position: absolute;
  left: 0%;
  bottom: 2px;
  width: 100%;

  @media (max-width: 868px) {
    position: relative;
  }
  h1 {
    font-size: 1rem;
    font-weight: bolder;
    color: white;
  }
`;
