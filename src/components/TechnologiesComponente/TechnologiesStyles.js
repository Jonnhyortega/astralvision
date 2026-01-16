import styled from "styled-components";

export const TechnologiesContent = styled.section`
  width: 100%;
  padding: 8rem 2rem 10rem 2rem;
  background: radial-gradient(circle at 50% 10%, #111 0%, #02040a 100%);
  color: #fff;
  text-align: center;
  overflow: hidden;

  .clients-section {
    max-width: 1200px;
    margin: 0 auto;

    h4 {
      margin-bottom: 5rem;
      color: white;
      font-family: var(--funnel); 
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -1px;
      
      span {
        color: var(--third);
        background: linear-gradient(90deg, var(--third), #fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }

    .clients-logos {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 4rem;
      perspective: 1000px;

      .logo-wrapper {
        /* Wrapper for the floating animation */
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
        opacity: 0.6;
        filter: grayscale(100%);
        transition: all 0.4s ease;
        cursor: pointer;

        /* Enhance interaction */
        &:hover {
          opacity: 1;
          filter: grayscale(0%) drop-shadow(0 0 10px rgba(255,255,255,0.4));
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 1rem;
    
    .clients-logos {
      gap: 2rem;
      
      .logo-wrapper {
        width: 120px;
        height: 80px;
      }
    }
  }
`;
