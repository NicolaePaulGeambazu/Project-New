import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  background: linear-gradient(#a6a6a6, #bfbfbf, #e6e6e6);
  box-shadow: 5px 5px #888888;
`;

export const Frame = styled.div`
  font-size: 20px;
`;
export const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const Area = styled.div`
display: flex;
align-items: center;
justify-content: center;
color:blue;
`

export const Box = styled.div`
  border: 0px solid black;
`;

export const Title = styled.div`
  font-weight: bolder;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Description = styled.div`
  font-size: 20px;
  color: black;
  display: flex;
  justify-content: center;
`;
