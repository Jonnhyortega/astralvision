import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0b0f13 0%, #0d1a27 100%);
  color: #d4d4d4;
  padding: 4rem 2rem 1rem;
  position: relative;
  overflow: hidden;
  font-family: var(--roboto);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle at bottom right,
      rgba(0, 123, 255, 0.2),
      transparent 70%
    );
    top: -100px;
    right: -120px;
    filter: blur(90px);
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-content: space-between;
  gap: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  h3 {
    color: var(--third);
    font-family: var(--funnel);
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #c9c9c9;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #c9c9c9;
      margin-bottom: 0.7rem;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.95rem;

      .icon-location {
        color: var(--third);
        font-size: 1.1rem;
      }

      a {
        color: #d4d4d4;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: var(--third);
        }
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;

  a {
    color: var(--third);
    font-size: 1.4rem;
    transition: 0.3s ease;
    display: flex;

    &:hover {
      transform: scale(1.15);
      color: white;
      filter: drop-shadow(0 0 6px var(--third));
    }
  }

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  margin-top: 3rem;
  text-align: center;
  position: relative;
  z-index: 2;

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
  }

  p {
    color: #aaa;
    font-size: 0.9rem;
    letter-spacing: 0.5px;

    strong {
      color: white;
      font-weight: 700;
    }
  }
`;
