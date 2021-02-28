import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFrown } from "@fortawesome/free-regular-svg-icons";

import { Container } from "styles/pages/Error";

const Error: React.FC = () => (
	<>
		<Head>
			<title>Page not found · D&apos;Bags</title>
		</Head>
		<Container>
			<FontAwesomeIcon icon={faFrown} />
			<h1>404</h1>
			<p>This page could not be found.</p>
		</Container>
	</>
);

export default Error;
