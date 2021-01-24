import Head from "next/head";

import { Container } from "../styles/pages/Error";

interface Props {
  statusCode: number;
  title: string;
}

const Error: React.FC<Props> = ({ statusCode, title }) => {
  return (
    <Container>
      <Head>
        <title>Error {statusCode}</title>
      </Head>
      <h1>{statusCode}</h1>
      <span />
      <h2>{title}</h2>
    </Container>
  );
};

export default Error;
