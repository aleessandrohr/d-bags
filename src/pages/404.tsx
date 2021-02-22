import Head from "next/head";

import { Container } from "styles/pages/Error";

const Error: React.FC = () => {
	return (
		<>
			<Head>
				<title>Error 404 : Not Found.</title>
			</Head>
			<Container>
				<h1>404</h1>
				<span />
				<h2>Not Found.</h2>
			</Container>
		</>
	);
};

export default Error;
