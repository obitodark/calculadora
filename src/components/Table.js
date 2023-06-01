import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeProvider";

import {
  ButtonNumeric,
  BtnAction,
  BtnResult,
  Input,
  BtnRadio,
  Switch,
} from "./common/Button";
import {
  Container,
  BodyCalc,
  ContainerInput,
  ContainerTheme,
} from "./common/Container";

import { ContainerButton } from "../components/common/ContainerButton";
import { Text } from "./common/Text";
import { Cacular } from "../util/calcular";

const Table = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [total, setTotal] = useState("");
  const table = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*"];

  const handleOnChangeInput = (e) => {
    const value = e.target.value;

    const numbers = String(total)
      .split(/[-+*/]/)
      .filter(Boolean);

    console.log("number", numbers);
    if (numbers.length === 2) {
      return handleCalcular();
    } else {
      return setTotal((preTotal) => preTotal + value);
    }
  };

  const handleCalcular = () => {
    console.log("calculando ....");
    const numbers = total.split(/[-+*/]/);
    const calc = new Cacular(Number(numbers[0]), Number(numbers[1]));
    console.log(numbers);
    console.log("operador", calc.getSigno(total));
    setTotal(calc.setCacular(calc.getSigno(total)[0]));
  };
  const handleDel = () => {
    const newTotal = String(total).slice(0, -1);
    setTotal(newTotal);
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setTheme(value);

    console.log(theme, value);
  };
  const handleReset = () => {
    setTotal("");
  };

  return (
    <>
      <div
        style={{
          // width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ContainerTheme>
          <Text>Calc</Text>
          <Text>{theme} :</Text>
          <Switch>
            {["theme01", "theme02", "theme03"].map((them, index) => (
              <BtnRadio
                key={index}
                name="radio"
                type="radio"
                value={them}
                checked={them === theme ? true : false}
                onChange={handleSelectChange}
              />
            ))}
          </Switch>
        </ContainerTheme>
        <ContainerInput>
          <Input
            pattern="[0-9]{0,13}"
            value={total}
            disabled
            // onKeyDown={valideKey}
            onChange={handleOnChangeInput}
            type="text"
            placeholder="00,00"
          />
        </ContainerInput>
        <BodyCalc>
          <Container>
            <ContainerButton height={225} width={"100%"}>
              {table.map((number, index) =>
                number === "DEL" ? (
                  <BtnAction
                    onClick={handleDel}
                    key={index}
                    width={"23%"}
                    height={"25%"}
                  >
                    {number}
                  </BtnAction>
                ) : (
                  <ButtonNumeric
                    key={index}
                    onClick={handleOnChangeInput}
                    width={"23%"}
                    height={"25%"}
                    value={number}
                  >
                    {number}
                  </ButtonNumeric>
                )
              )}
            </ContainerButton>
          </Container>

          <ContainerButton height={55} justifyContent={"space-around"}>
            {["RESET", "="].map((number, index) =>
              number === "=" ? (
                <BtnResult onClick={handleCalcular} key={index} width={"48%"}>
                  {number}
                </BtnResult>
              ) : (
                <BtnAction onClick={handleReset} key={index} width={"48%"}>
                  {number}
                </BtnAction>
              )
            )}
          </ContainerButton>
        </BodyCalc>
      </div>
    </>
  );
};
export default Table;
