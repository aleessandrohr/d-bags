import { AppProps } from "next/app";
import Head from "next/head";
import { usePersistedState } from "../hooks/usePersistedState";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import GlobalStyle from "../styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState("theme", "light");
  const currentTheme = theme === "light" ? light : dark;

  return (
    <ThemeProvider theme={currentTheme}>
      <Head>
        <title>D'bags</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
