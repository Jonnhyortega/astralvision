import styled from "styled-components";
export const WrapperForm = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 5px;
  z-index: 100;
  border: 1px solid white;
  backdrop-filter: blur(2px) saturate(180%);
  -webkit-backdrop-filter: blur(2px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.5);
  @media (max-width: 650px) {
    border-radius: 0;
    border: none;
    height: 100%;
  }

  h2 {
    text-align: center;
    color: white;
    margin-bottom: 50px;
    font-weight: 900px;
    font-size: 2em;
    letter-spacing: 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    z-index: 100;
  }

  label{
      font-size: 20px;
      color: white;
      font-weight: bold;

  }

  input,
  textarea {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 12px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid white;
    font-size: 16px;
    background: transparent;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
  }

  textarea {
    height: 120px;
  }

  input::placeholder,
  textarea::placeholder {
    color: white;
  }

  button {
    padding: 10px;
    width: 150px;
    margin: 0 auto;
    background-color: transparent;
    color: white;
    font-weight: 700;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color, color 0.5s;
  }

  button:hover {
    color: white;
    border: 1px solid transparent;
    background-color: #0056b3;
  }

  p {
    text-align: center;
    color: #28a745;
    margin-top: 15px;
  }
`;
