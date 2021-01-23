import Error from "./_error";
import useFetch from "../hooks/useFetch";
import { Bags } from "../@types/Bags";
import { ErrorFetch } from "../@types/ErrorFetch";

import Loading from "../components/Loading/index";
import NewBags from "../components/NewBags/index";

import { Container, Initial } from "../styles/pages/Home";

interface Props {
  newBags?: Bags[];
  bagsByPrice?: Bags[];
}

const Home: React.FC<Props> = () => {
  const { data, error } = useFetch<Props, ErrorFetch>(
    "https://dbags.herokuapp.com/public/home"
  );

  if (error) {
    return <Error statusCode={error.status} title={error.statusText} />;
  }

  return (
    <Container>
      <Initial />
      {!data ? (
        <Loading />
      ) : (
        <>
          <NewBags newBags={data.newBags} />
        </>
      )}
    </Container>
  );
};

export default Home;
