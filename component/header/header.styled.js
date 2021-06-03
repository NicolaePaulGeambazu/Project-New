import styled from "styled-components";

export const Header = styled.div`
  height: 40px;
  width: auto;
  background-color: #008080;
  margin-bottom: 20px;
`;

export const Nav = styled.button`
  border: 0;
  cursor: pointer;
  width: 80px;
  height: 40px;
  margin-left: 30px;
  border: 1px solid ${({ selected }) => (selected ? "red" : "blue")};
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
