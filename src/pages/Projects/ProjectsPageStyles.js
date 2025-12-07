import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: radial-gradient(circle at 20% 30%, #0b1221 0%, #05080f 100%);
  color: #f5f5f5;
  font-family: "Poppins", sans-serif;

  .headline {
    font-size: 3rem;
    text-align: center;
    margin: 4rem 0;
    font-family: var(--oswald);
    background: linear-gradient(90deg, white, gray);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 auto;
  }

  .project-row {
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;

    &.reverse {
      flex-direction: row-reverse;
    }
  }

  .image-side {
    flex: 1 1 45%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 300px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      transition: transform 0.4s ease;
      object-fit: cover;

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  .text-side {
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 500px;

    h3 {
      font-size: 2.2rem;
      filter: drop-shadow(1px 3px 1px black) ;
      font-family: var(--oswald) ;
    }

    p {
      font-size: 1.1rem;
      color: white;
      line-height: 1.7;
      font-family:var(--titilium) ;
    }

    .buttons {
      display: flex;
      gap: 1rem;
    }

    .btn-detail,
    .btn-site {
      padding: 12px 26px;
      border-radius: 10px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-detail {
      background: transparent;
      border: 2px solid #00c3ff;
      color: #00c3ff;

      &:hover {
        background: #00c3ff;
        color: #000;
      }
    }

    .btn-site {
      background: linear-gradient(90deg, #00c3ff, #ff9b00);
      color: #000;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }

  @media (max-width: 768px) {
    .headline {
      font-size: 2.2rem;
    }

    .project-row {
      flex-direction: column !important;
      gap: 2rem;
    }

    .text-side {
      text-align: center;
      align-items: center;

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
      }

      .buttons {
        flex-direction: column;
        width: 100%;

        a {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;
