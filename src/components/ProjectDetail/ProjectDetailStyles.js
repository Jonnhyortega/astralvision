import styled from "styled-components";

export const ProjectDetailWrapper = styled.div`
  background: #0f0f10;
  color: #f5f5f5;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;

  .banner {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    transition-duration: .6s all ;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
      filter: brightness(0.8);
    }

    .title-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      h1 {
        display:none;
        font-size: 3rem;
        background: linear-gradient(90deg, var(--primary), var(--third));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bolder ;
        font-family: var(--funnel) ;
      }

      p {
        color: #ccc;
        margin-top: 1rem;
      }
    }
  }



  .case-body {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 2rem;
    line-height: 1.8;

    h2 {
      margin-top: 3rem;
      color: #00c3ff;
      font-size: 1.8rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;

      li {
        background: #1a1a1c;
        padding: 0.6rem 1rem;
        border-radius: 8px;
        font-weight: 500;
        color: #fff;
      }
    }

    .visit-btn {
      display: inline-block;
      margin-top: 3rem;
      background: linear-gradient(90deg, #00c3ff, #ff9b00);
      color: #000;
      font-weight: 600;
      text-decoration: none;
      padding: 0.9rem 2rem;
      border-radius: 10px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
