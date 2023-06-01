import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => (display ? display : "flex")};
  justify-content: center;
  align-items: center;
  width: 100%;
  //   border: 1px solid red;
`;
export const BodyCalc = styled.div`
  background: ${({ theme }) => theme.back_body};
  padding: 15px;
  border-radius: 10px;
  max-width: 400px;
`;
export const ContainerInput = styled(BodyCalc)`
  background: ${({ theme }) => theme.back_input};
  display: flex;
  justify-content: center;
  margin: 15px 0px 15px 0px;
`;

export const ContainerTheme = styled.div`
  background: none;
  display: flex;
  justify-content: space-around;
`;
