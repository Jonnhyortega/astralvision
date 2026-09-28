import styled from "styled-components";
import { motion } from "framer-motion";

export const OpinionsWrapper = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background: transparent; 
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h2 {
    font-size: 2.8rem;
    color: white;
    text-align: center;
    font-family: var(--font-sans);
    font-weight: 700;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 2;

    span {
      background: linear-gradient(90deg, #00b4d8, #0077b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 90px;
      height: 4px;
      background-color: var(--third);
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 6.5rem 1.5rem 4rem;
  }
`;

export const TestimonialCard = styled(motion.a)`
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 180, 216, 0.4);
    box-shadow: 0 12px 35px rgba(0, 180, 216, 0.2);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }

  .client-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid rgba(0, 180, 216, 0.3);
    background: #0f172a;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .client-info {
    h4 {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }

    span {
      font-family: var(--font-sans);
      font-size: 0.85rem;
      color: #94a3b8;
    }
  }

  .stars-row {
    display: flex;
    gap: 4px;
    margin-bottom: 1rem;

    .star-icon {
      color: #ffc107;
      font-size: 1.2rem;
    }
  }

  .comment-text {
    font-family: var(--font-sans);
    font-size: 0.95rem;
    line-height: 1.6;
    color: #cbd5e1;
    font-weight: 400;
    margin: 0;
  }
`;
