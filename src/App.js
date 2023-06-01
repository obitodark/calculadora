import { createContext, useState } from "react";
import Themes from "./context/themeProvider";

import Router from "./router";
// import { theme01, theme02 } from "./styles/theme";
// import styled, { ThemeProvider } from "styled-components";
// export const ThemeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("theme01");

  // const themeStyle = theme === "theme01" ? theme01 : theme02;
  return (
    <>
      {/* <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}> */}

      {/* <Container> */}
      <Themes>
        <Router />
      </Themes>

      {/* </Container> */}
      {/* </ThemeProvider>
      </ThemeContext.Provider> */}
    </>
  );
}

export default App;

// const Container = styled.div`
//   background: ${({ theme }) => theme.body};
//   width: 100vw;
//   height: 100vh;
// `;
