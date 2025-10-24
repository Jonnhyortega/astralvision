import styled from "styled-components";

export const TechnologiesContent = styled.section`
  width: 100%;
  padding: 6rem 1rem 8rem 1rem;
  background: linear-gradient(180deg, #0f0f14 0%, #061824 100%);
  color: #fff;
  text-align: center;

  .intro {
    max-width: 800px;
    margin: 0 auto 4rem auto;
    padding: 0 1rem;

    h3 {
      font-size: 2.4rem;
      font-weight: 700;
      font-family: var(--oswald);
      margin-bottom: 1rem;

      span {
        color: var(--third);
      }
    }

    p {
      font-size: 1.1rem;
      color: #ccc;
      line-height: 1.6;
    }
  }

  .tech-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 6rem;
  }

  .img-technologies {
    width: 100px;
    height: 100px;
    filter: drop-shadow(1px 1px 3px black);
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(1px 1px 5px var(--third));
    }
  }

  .clients-section {
    h4 {
      margin-bottom: 2rem;
      color: var(--third);
      font-family: var(--oswald); 
      font-size: 2.4rem;
      font-weight: 700;

    }

    .clients-logos {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 3rem;

      img {
        width: 140px;
        height: auto;
        opacity: 0.8;
        transition: 0.3s;
        border-radius: 20px ;
        filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.4));
        &:hover {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .img-technologies {
      width: 80px;
      height: 80px;
    }

    .clients-logos img {
      width: 110px;
    }
  }
`;
