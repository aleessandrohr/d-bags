import Head from "next/head";

import { Container } from "../styles/pages/Error";

interface Props {
  statusCode?: number;
  title?: string;
}

const Error: React.FC<Props> = ({ statusCode = 404, title = "Not Found." }) => {
  return (
    <Container>
      <Head>
        <title>Error {statusCode}</title>
      </Head>
      {statusCode ? (
        <>
          <h1>{statusCode}</h1>
          <span />
          <h2>{title}</h2>
        </>
      ) : (
        <h1>An error occurred.</h1>
      )}
    </Container>
  );
};

export default Error;
