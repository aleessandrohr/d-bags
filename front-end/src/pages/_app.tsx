import { AppProps } from "next/app";
import Head from "next/head";
import usePersistedState from "../hooks/usePersistedState";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header/index";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState("theme", "light");
  const currentTheme = theme === "light" ? light : dark;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Head>
        <title>D'bags</title>
      </Head>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
