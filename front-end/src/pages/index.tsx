import Error from "./_error";
import useFetch from "../hooks/useFetch";
import { Bags } from "../@types/Bags";
import { ErrorFetcher } from "../@types/ErrorFetcher";

import { Container, Initial } from "../styles/pages/Home";
import { ErrorFetch } from "../@types/ErrorFetch";

interface Props {
  newBags?: Bags[];
  bagsByPrice?: Bags[];
}

const Home: React.FC<Props> = () => {
  const { data, error } = useFetch<Bags, ErrorFetch>(
    "https://dbags.herokuapp.com/public/home"
  );

  if (error) {
    return <Error statusCode={error.status} title={error.statusText} />;
  }

  return (
    <Container>
      <Initial />
    </Container>
  );
};

export default Home;
