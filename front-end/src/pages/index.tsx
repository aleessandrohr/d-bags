import Error from "next/error";
import Head from "next/head";
import { useFetch } from "../hooks/useFetch";
import { BagsType } from "../@types/BagsType";
import { ErrorType } from "../@types/ErrorType";

import Loading from "../components/Loading/index";
import NewsBags from "../components/NewsBags/index";

import { Container } from "../styles/pages/index";

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

  if (!data) {
    return <Loading />;
  }

  return (
    <Container>
      <Head>
        <title>D'bags</title>
      </Head>
      <h1>NOVIDADES</h1>
      {data.newBags?.map((newBag: BagsType, index) => (
        <NewsBags
          handle_type={newBag.handle_type}
          img_path={newBag.img_path}
          name={newBag.name}
          retail_price={newBag.retail_price}
          type={newBag.type}
          key={index}
          direction={index % 3 === 0 ? false : true}
        />
      ))}
    </Container>
  );
};

export default Home;
