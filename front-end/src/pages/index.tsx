import Error from "next/error";
import Head from "next/head";
import { useFetch } from "../hooks/useFetch";
import { BagsType } from "../@types/BagsType";
import { ErrorType } from "../@types/ErrorType";

import Loading from "../components/Loading/index";
import NewsBags from "../components/NewsBags/index";
import BagsByPrice from "../components/BagsByPrice/index";

import { Container, News, ByPrice } from "../styles/pages/index";

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
      <News>
        <h1>NOVIDADES</h1>
        {data.newBags?.map((newBag: BagsType, index) => (
          <NewsBags
            name={newBag.name}
            retail_price={newBag.retail_price}
            handle_type={newBag.handle_type}
            type={newBag.type}
            length={newBag.length}
            width={newBag.width}
            height={newBag.height}
            img_path={newBag.img_path}
            direction={index % 3 === 0 ? false : true}
            key={index}
          />
        ))}
      </News>
      <ByPrice>
        <h1>
          A partir de <span>R$80</span>
        </h1>
        <div className="bagsByPrice">
          {data.bagsByPrice?.map((bag: BagsType, index) => (
            <BagsByPrice
              name={bag.name}
              img_path={bag.img_path}
              retail_price={bag.retail_price}
              key={index}
            />
          ))}
        </div>
      </ByPrice>
    </Container>
  );
};

export default Home;
