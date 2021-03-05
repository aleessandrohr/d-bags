import Head from "next/head";
import Link from "next/link";

import { Container } from "styles/pages/Error";

const Error: React.FC = () => (
	<>
		<Head>
			<title>Page not found · D&apos;Bags</title>
		</Head>
		<Container>
			<h1>404</h1>
			<p>This page could not be found.</p>
			<Link href="/">
				<a>PÁGINA INICIAL</a>
			</Link>
		</Container>
	</>
);

export default Error;
