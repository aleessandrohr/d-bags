import Font from "next-google-fonts";
import { AppProps } from "next/app";
import Head from "next/head";

import { Fragment } from "react";

import { ThemeProvider } from "styled-components";

import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";

import { usePersistedState } from "hooks/usePersistedState";

import { dark } from "styles/themes/dark";
import { light } from "styles/themes/light";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [theme, setTheme] = usePersistedState("theme", "light");
	const currentTheme = theme === "light" ? light : dark;

	return (
		<ThemeProvider theme={currentTheme}>
			<Fragment>
				<Font href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
				<Font href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" />
				<Head>
					<title>D&apos;Bags</title>
				</Head>
			</Fragment>
			<NavBar />
			<Component {...pageProps} />
			<Footer setTheme={setTheme} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
