import styled from "styled-components";
export const WrapperForm = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 5px;
  z-index: 100;

  @media (max-width: 650px) {
    border-radius: 0;
    border: none;
    height: 100%;
  }

  h2 {
    text-align: center;
    color: black;
    margin-bottom: 50px;
    font-weight: 900px;
    font-size: 2em;
    letter-spacing: 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    z-index: 100;
    color: black;
  }

  label {
    color: black;
    font-size: 20px;
    font-weight: bold;
  }

  input,
  textarea {
    margin-top: 10px;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid grey;
    font-size: 16px;
    font-weight: bold;
    background: transparent;
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    outline: none;
  }
  
  input:focus,
  textarea:focus {
    border: 1px solid black;
    color: black;
    font-weight: bolder ;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    height: 120px;
  }

  input::placeholder,
  textarea::placeholder {
    color: black;
  }

  button {
    padding: 10px;
    width: 150px;
    margin: 0 auto;
    background-color: transparent;
    color: black;
    font-weight: 700;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color, color 0.5s;
  }

  button:hover {
    color: black;
    border: 1px solid transparent;
    background-color: black;
    color: white;
  }

  p {
    text-align: center;
    color: #28a745;
    margin-top: 15px;
  }
`;
