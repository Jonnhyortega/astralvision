import styled from "styled-components";

export const TechnologiesContent = styled.section`
  width: 100%;
  padding: 8rem 2rem 10rem 2rem;
  background: radial-gradient(circle at 50% 10%, #111 0%, #02040a 100%);
  text-align: center;
  overflow: hidden;

  .clients-section {
    max-width: 1200px;
    margin: 0 auto;

    h4 {
      margin-bottom: 4rem;
      color: white;
      font-family: var(--font-sans); 
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      
      span {
        color: var(--third);
        background: linear-gradient(90deg, var(--third), #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .clients-logos {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 3.5rem;
      perspective: 1000px;
      border-radius: 10px;  

      .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 100px;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        opacity: 0.65;
        mix-blend-mode: lighten;
        filter: grayscale(100%) brightness(0.9);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;

        &:hover {
          opacity: 1;
          mix-blend-mode: normal;
          filter: grayscale(0%) drop-shadow(0 0 14px rgba(255,255,255,0.6));
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6.5rem 1rem 4rem;
    
    .clients-logos {
      gap: 2rem;
      
      .logo-wrapper {
        width: 120px;
        height: 80px;
      }
    }
  }
`;
