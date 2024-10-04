import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 60vw;
  border-radius: 30px;
  border: 3px solid #170d3f;
  background-color: #1d2024;

  &:hover{
    box-shadow: 5px 3px 5px #1d2024;
  }
`;

export const Image = styled.img`
width: 70px;
height: 70px;
border-radius: 100%;
margin: 15px;
`

export const Name = styled.h1`
font-weight: 300;
text-decoration: none;
`

