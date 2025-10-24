import styled from "styled-components";

export const CardProjectWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 6rem auto;
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 85%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    margin-bottom: 2rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }

  .description {
    font-size: 1.1rem;
    color: #111;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto 2.5rem;
  }

  .visit-button {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
    }
  }

  @media (max-width: 768px) {
    padding: 40px 15px;

    h3 {
      font-size: 1.8rem;
    }

    img {
      width: 100%;
    }

    .description {
      font-size: 1rem;
      padding: 0 10px;
    }
  }
`;
