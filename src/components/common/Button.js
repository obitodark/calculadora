import styled from "styled-components";

export const ButtonNumeric = styled.button`
  background: ${({ theme }) => theme.btn_background_primary};
  border-radius: 7px;
  border: none;
  // box-shadow: 0px 4px #b5a499;
  box-shadow: 0px 4px ${({ theme }) => theme.btn_shadow_color_primary};
  cursor: pointer;
  box-sizing: border-box;
  width: ${({ width }) => width};
  heigth: ${({ height }) => height};
  // height: 40px;
  font-size: 25px;
  font-weight: bold;
  margin: 7px 0px 7px 0px;
  color: ${({ theme }) => theme.text_color_secundary};
  &:hover {
    background: ${({ theme }) => theme.btn_hover_background_primary};
  }
`;

export const BtnAction = styled(ButtonNumeric)`
  background: ${({ theme }) => theme.btn_background_secondary};
  color: ${({ theme }) => theme.text_color_third};
  box-shadow: 0px 4px ${({ theme }) => theme.btn_shadow_color_secundary};
  &:hover {
    background: ${({ theme }) => theme.btn_hover_background_secondary};
  }
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.back_input};
  color: ${({ theme }) => theme.text_color_primary};
  font-size: 35px;
  font-weight: bold;

  border: none;
  padding: 10px;

  width: 100%;
  text-align: right;
  outline: none;
  ::placeholder {
    text-align: right;
    color: ${({ theme }) => theme.text_color_primary};
  }
`;

export const BtnResult = styled(ButtonNumeric)`
  background: ${({ theme }) => theme.btn_background_third};
  color: ${({ theme }) => theme.text_color_primary};
  box-shadow: 0px 4px ${({ theme }) => theme.btn_shadow_color_third};
  &:hover {
    background: ${({ theme }) => theme.btn_hover_background_third};
  }
`;

export const Switch = styled.div`
  background: ${({ theme }) => theme.back_body};
  border-radius: 10px;
  width: 75px;
  height: 25px;
  display: flex;

  padding: 0px 2px 0px 2px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const BtnRadio = styled.input`
  // opacity: 0;

  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  position: relative;
  color: black !important;
  background-color: black !important;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 20px;
    heigth: 20px;
    background-color: black !important;
    z-index: 2;
  }
  // "&:checked + label" : {
  //   color: black !important;
  //   background-color: black !important;
  // }
`;
