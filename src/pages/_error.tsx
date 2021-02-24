import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFrown } from "@fortawesome/free-regular-svg-icons";

import { Container } from "styles/pages/Error";

interface Props {
	status: number;
	statusText: string;
}

const Error: React.FC<Props> = ({ status, statusText }) => {
	return (
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
};

export default Error;
