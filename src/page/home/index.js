import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context/themeProvider";
import "./styles.css";
import Table from "../../components/Table";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const Container = styled.div`
    background: ${({ theme }) => theme.body};
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Container>
        <Table />
      </Container>
    </>
  );
};
export default Home;
