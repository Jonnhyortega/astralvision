import styled from "styled-components";

export const SocialContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding: 1rem 0;

  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-color, #f1f1f1);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 0.7rem 1.1rem;
    text-decoration: none;
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.05);

    svg {
      font-size: 1.4rem;
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--hover-color);
      border-color: var(--hover-color);
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 0 12px var(--hover-color);

      svg {
        filter: drop-shadow(0 0 6px var(--hover-color));
        transform: scale(1.1);
      }
    }

    span {
      opacity: 0.85;
      letter-spacing: 0.3px;
      transition: opacity 0.3s;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.6rem 0.9rem;
    }
  }
`;
