import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25292f;
`;

export const SortDropdown = styled.select`
  border-radius: 50px;
  padding: 5px;
  padding-left: 10px;
  border: 2px solid #170d3f;
  background-color: #1d2024;
  margin-top: 30px;
  margin-bottom: 20px;

  &:hover{
    box-shadow: 5px 3px 5px #1d2024;
  }

  &:active{
    background-color: #7b4783;
  }
`

export const ResultList = styled.div`
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 10px;
`

export const Pagination = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  border: 2px solid #170d3f;
  background-color: #1d2024;

  &:hover{
    box-shadow: 5px 3px 5px #1d2024;
  }

  &:active{
    background-color: #7b4783;
  }

`;

