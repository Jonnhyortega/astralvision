import styled from "styled-components";

export const WrapperForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem;
  background: linear-gradient(180deg, #0f141a 0%, #101d2d 100%);
  backdrop-filter: blur(10px);
  position: relative;
  margin-top: 4rem ;
  .form-box {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    padding: 3rem 2rem;
    width: 100%;
    max-width: 550px;
    color: white;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    animation: fadeIn 0.8s ease;

    h2 {
      font-family: var(--funnel);
      font-weight: 900;
      text-align: center;
      font-size: 2.3rem;
      color: white;
      margin-bottom: 0.5rem;
    }

    p {
      text-align: center;
      color: #cfcfcf;
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    label {
      font-weight: 600;
      font-size: 0.95rem;
      color: #cfcfcf;
    }

    input,
    textarea {
      padding: 12px;
      border: none;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.12);
      color: white;
      font-size: 1rem;
      transition: 0.3s;
      outline: none;
      resize: none;

      &::placeholder {
        color: #b9b9b9;
      }

      &:focus {
        border: 1px solid var(--third);
        background: rgba(255, 255, 255, 0.2);
      }
    }

    textarea {
      min-height: 120px;
    }

    button {
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: var(--third);
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      margin-top: 10px;
      transition: 0.3s;
      letter-spacing: 0.5px;

      &:hover {
        background: var(--primary);
        color: var(--third);
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 600px) {
    .form-box {
      padding: 2rem 1.5rem;
      h2 {
        font-size: 1.8rem;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
