import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import { Footer } from "components/Footer";
import { Head } from "components/Head";
import { Header } from "components/Header";

import { usePersistedState } from "hooks/usePersistedState";

import { dark } from "styles/themes/dark";
import { light } from "styles/themes/light";

import GlobalStyle from "styles/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [theme, setTheme] = usePersistedState("theme", "light");
	const currentTheme = theme === "light" ? light : dark;

	return (
		<ThemeProvider theme={currentTheme}>
			<Head />
			<Header />
			<Component {...pageProps} />
			<Footer setTheme={setTheme} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
