import { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider, CssBaseline, useTheme } from "@mui/material";
import getTheme from "../theme";

const ThemeContext = createContext({ mode: "light", setMode: () => {} });

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);

export const useAppTheme = () => useTheme();
