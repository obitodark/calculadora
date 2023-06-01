import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme01, theme02, theme03 } from "../styles/theme";

export const ThemeContext = createContext();

const Themes = ({ children }) => {
  const [theme, setTheme] = useState("theme01");
  const themeStyle =
    theme === "theme01" ? theme01 : theme === "theme02" ? theme02 : theme03;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default Themes;
