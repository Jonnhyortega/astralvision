import styled from "styled-components";

export const ProjectDetailWrapper = styled.div`
  background: #0f0f10;
  color: #f5f5f5;
  font-family: var(--inter);
  min-height: 100vh;

  /* ---------- HERO ---------- */
  .banner {
    position: relative;
    width: 100%;
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-align: center;
  }

  .overlay {
    position: relative;
    z-index: 2;
    padding: 2rem;
    max-width: 900px;
  }

  .project-logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin-bottom: 1.5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  h1 {
    font-family: var(--funnel);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--primary);
    text-shadow: 0 0 15px rgba(0,0,0,0.3);
  }

  .banner p {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    opacity: 0.9;
    color: var(--primary);
  }

  /* ---------- BODY ---------- */
  .case-body {
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 2rem;
    line-height: 1.8;
  }

  .case-body h2 {
    margin-top: 3rem;
    color: var(--third);
    font-size: 1.8rem;
    font-family: var(--titilium);
  }

  .case-body p {
    margin-top: 1rem;
    color: #d9d9d9;
    font-weight: 300;
    font-size: 1rem;
  }

  .tech-stack ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .tech-stack li {
    background: rgba(255,255,255,0.08);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    color: var(--primary);
    border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
  }

  .tech-stack li:hover {
    transform: translateY(-3px);
    background: var(--third);
    color: #fff;
  }

  .visit-btn {
    display: inline-block;
    margin-top: 3rem;
    font-weight: 600;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #fff;
    background: linear-gradient(90deg, var(--third), var(--secondary));
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
  }

  .visit-btn:hover {
    transform: translateY(-3px);
    background: linear-gradient(90deg, var(--secondary), var(--third));
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 768px) {
    .banner {
      height: 65vh;
      padding: 1rem;
    }

    h1 {
      font-size: 2.2rem;
    }

    .case-body {
      padding: 3rem 1.2rem;
    }
  }
`;
