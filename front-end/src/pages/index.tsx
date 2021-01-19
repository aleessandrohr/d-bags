import Error from "next/error";
import { useFetch } from "../hooks/useFetch";
import { BagsType } from "../@types/BagsType";
import { ErrorType } from "../@types/ErrorType";

import Loading from "../components/Loading/index";
import NewsBags from "../components/NewsBags/index";
import BagsByPrice from "../components/BagsByPrice/index";

import { Container, Initial, Bags } from "../styles/pages/index";

interface Bags {
  newBags?: BagsType[];
  bagsByPrice?: BagsType[];
}

const Home: React.FC = () => {
  const { data, error } = useFetch<Bags, ErrorType>(
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
        <Bags>
          <NewsBags newBags={data.newBags} />
          <BagsByPrice bagsByPrice={data.bagsByPrice} />
        </Bags>
      )}
    </Container>
  );
};

export default Home;
