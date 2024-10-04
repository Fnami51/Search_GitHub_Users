import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25292f;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`

export const Input = styled.input`
  font-size: 36px;
  text-align: center;
  padding: 10px;
  border-radius: 50px;
  border: 3px solid #170d3f;
  background-color: #1d2024;
  color: white;
  font-weight: 500;

  &:hover{
    box-shadow: 5px 3px 5px #1d2024;
  }
`

export const Button = styled.button`
  font-size: 38px;
  border-radius: 50px;
  padding: 10px;
  border: 3px solid #170d3f;
  background-color: #1d2024;

  &:hover{
    box-shadow: 5px 3px 5px #1d2024;
  }

  &:active{
    background-color: #7b4783;
  }
`