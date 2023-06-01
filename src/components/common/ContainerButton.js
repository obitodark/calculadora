import styled from "styled-components";

export const ContainerButton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-evenly"};
  //   border: 1px solid red;
  //   align-content: stretch;
  margin: 0;
`;
