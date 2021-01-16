import { AppProps } from "next/app";
import { useCallback } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { ThemeProvider, DefaultTheme } from "styled-components";

import Header from "../components/Header/index";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
