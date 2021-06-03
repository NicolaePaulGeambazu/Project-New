import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 100px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
