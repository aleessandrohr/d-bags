import Head from "next/head";
import Link from "next/link";

import { ErrorFetch } from "types/interfaces/ErrorFetch";

import { Container } from "styles/pages/Error";

const Error: React.FC<ErrorFetch> = ({ status, statusText }) => (
	<>
		<Head>
			<title>{statusText} · D&apos;Bags</title>
		</Head>
		<Container>
			<h1>{status}</h1>
			<p>{statusText}</p>
			<Link href="/">
				<a>PÁGINA INICIAL</a>
			</Link>
		</Container>
	</>
);

export default Error;
