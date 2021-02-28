import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFrown } from "@fortawesome/free-regular-svg-icons";

import { ErrorFetch } from "types/interfaces/ErrorFetch";

import { Container } from "styles/pages/Error";

const Error: React.FC<ErrorFetch> = ({ status, statusText }) => (
	<>
		<Head>
			<title>{statusText} · D&apos;Bags</title>
		</Head>
		<Container>
			<FontAwesomeIcon icon={faFrown} />
			<h1>{status}</h1>
			<p>{statusText}</p>
		</Container>
	</>
);

export default Error;
