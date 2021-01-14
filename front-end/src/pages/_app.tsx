import { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { usePersistedState } from "../hooks/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import Header from "../components/Header/index";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
