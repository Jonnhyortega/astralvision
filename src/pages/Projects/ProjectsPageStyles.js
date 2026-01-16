import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  width: 100%;
  padding: 4rem 1.5rem;
  background: radial-gradient(circle at 50% 10%, #0b1221 0%, #05080f 100%);
  color: #f5f5f5;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;

  .headline {
    font-size: clamp(2.5rem, 5vw, 4rem);
    text-align: center;
    margin: 5rem 0;
    font-family: var(--oswald);
    background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 4px;
      background: #00c3ff;
      margin: 1rem auto 0;
      border-radius: 2px;
    }
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    gap: 4rem;
  }

  .project-row {
    display: flex;
    align-items: center;
    gap: 4rem;
    justify-content: space-between;
    border-radius: 30px;
    padding: 4rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Create a dark overlay to ensure text readability over colorful backgrounds */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3); /* Adjust opacity as needed */
      z-index: 1;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }

  .image-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    img {
      width: 100%;
      max-width: 450px;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
      transition: all 0.5s ease;
      object-fit: cover;
      transform: perspective(1000px) rotateY(-5deg);
      background-color: #1a1a1a; /* Placeholder color while loading */

      &:hover {
        transform: perspective(1000px) rotateY(0deg) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      }
    }
  }

  /* Adjust rotation for reverse layout */
  .project-row.reverse .image-side img {
    transform: perspective(1000px) rotateY(5deg);
    
    &:hover {
      transform: perspective(1000px) rotateY(0deg) scale(1.02);
    }
  }

  .text-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 2;
    text-align: left;

    h3 {
      font-size: clamp(2rem, 3vw, 3rem);
      font-family: var(--oswald);
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      line-height: 1.1;
      /* Ensure text color comes from inline style or fallback */
    }

    p {
      font-size: 1.1rem;
      color: #e5e7eb;
      line-height: 1.8;
      font-family: var(--titilium);
      font-weight: 300;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }

    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .btn-site {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 32px;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      letter-spacing: 0.5px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      text-transform: uppercase;
      font-size: 0.9rem;
      border: 1px solid rgba(255,255,255,0.1);
      color: #fff; /* Default text color in button */

      &:hover {
        transform: translateY(-3px) scale(1.05);
        filter: brightness(1.1);
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      }
      
      &:active {
        transform: translateY(-1px);
      }
    }
  }

  @media (max-width: 968px) {
    padding: 3rem 1rem;
    
    .headline {
      margin-bottom: 3rem;
    }

    .projects-list {
      gap: 3rem;
    }

    .project-row {
      flex-direction: column !important;
      padding: 2.5rem 1.5rem;
      gap: 2.5rem;
      text-align: center;
    }

    .image-side {
      width: 100%;
      
      img {
        max-width: 100%;
        transform: none !important; 
        
        &:hover {
          transform: scale(1.02);
        }
      }
    }

    .text-side {
      width: 100%;
      align-items: center;
      text-align: center;

      h3 {
        margin-bottom: 1rem;
      }
      
      .buttons {
        width: 100%;
        justify-content: center;
      }

      .btn-site {
        width: 100%;
        max-width: 300px;
      }
    }
  }
`;
