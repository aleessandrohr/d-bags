import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta httpEquiv="content-language" content="pt-br" />
					<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
					<meta
						name="description"
						content="Encontre as melhores bolsas com as melhores ofertas e promoções na D'Bags."
					/>
					<meta name="keywords" content="dbags, loja, bolsas" />
					<meta name="author" content="Alessandro Ramos" />
					<meta name="robots" content="all" />
					<meta
						name="google-site-verification"
						content="6VEG1pJ38MUONeTeHCpbOoHyTaG9tQsPRMJ-3CfIofw"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
