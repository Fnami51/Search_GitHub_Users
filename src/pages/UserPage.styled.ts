import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #25292f;
`;

export const Box = styled.div`
  border-radius: 30px;
  padding: 15px;
  border: 3px solid #170d3f;
  background-color: #1d2024;
  width: 80vw;
  margin-top: 30px;
  margin-bottom: 60px; 
`
export const UserInfo = styled.div`
display:flex;
gap: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #8c8c8c;
`

export const Image = styled.img`
width: 70px;
height: 70px;
border-radius: 100%;
`

export const TextBox = styled.div`
display:flex;
flex-direction: column;
gap: 10px;
`

export const Name = styled.h1`
font-weight: 400;
font-size: 24px;
padding-bottom: 5px;
`

export const Attribute = styled.h2`
font-weight: 300;
font-size: 18px;
`

export const AttributeLink = styled.a`
font-weight: 300;
font-size: 18px;
text-decoration: underline;
`

export const Title = styled.h1`
font-size: 34px;
font-weight: 500;
`

export const List = styled.div`
height: 90%;
display: flex;
flex-direction: column;
overflow-y: scroll;
scroll-behavior: smooth;
`