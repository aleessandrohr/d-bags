import Error from "./_error";
import { useFetch } from "../hooks/useFetch";
import { Bag } from "../@types/Bag";
import { ErrorFetch } from "../@types/ErrorFetch";

import NewBags from "../components/NewBags/index";
import BagsByPrice from "../components/BagsByPrice/index";

import { Container, Background } from "../styles/pages/Home";

interface Data {
  newBags?: Array<Bag>;
  bagsByPrice?: Array<Bag>;
}

const Home: React.FC = () => {
  const { data, error } = useFetch<Data, ErrorFetch>(
    "https://dbags.herokuapp.com/public/home"
  );

  if (error) {
    return <Error status={error.code} message={error.message} />;
  }

  return (
    <Container>
      <Background />
      <NewBags newBags={data?.newBags} />
      <BagsByPrice bagsByPrice={data?.bagsByPrice} />
    </Container>
  );
};

export default Home;
