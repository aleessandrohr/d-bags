import Head from "next/head";

import { Container } from "../styles/pages/Error";

interface Props {
	status: number;
	statusText: string;
}

const Error: React.FC<Props> = ({ status, statusText }) => {
	return (
		<Container>
			<Head>
				<title>
					Error {status} : {message}
				</title>
			</Head>
			<h1>{status}</h1>
			<span />
			<h2>{statusText}</h2>
		</Container>
	);
};

export default Error;
