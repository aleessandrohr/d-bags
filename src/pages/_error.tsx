import Head from "next/head";

import { Container } from "../styles/pages/Error";

interface Props {
	status: number;
	message: string;
}

const Error: React.FC<Props> = ({ status, message }) => {
	return (
		<Container>
			<Head>
				<title>
					Error {status} : {message}
				</title>
			</Head>
			<h1>{status}</h1>
			<span />
			<h2>{message}</h2>
		</Container>
	);
};

export default Error;
