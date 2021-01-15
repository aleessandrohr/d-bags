import News from "../components/News";

import { Container } from "../styles/pages/index";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>NOVIDADES</h1>
      <News
        product="Bolsa Couro Fino"
        description={{
          item1: "Couro Sintético",
          item2: "Feminina c/ Alça Fixa",
          item3: "Marrom e preto",
        }}
        price={0.0}
        img={
          "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=940"
        }
      />
    </Container>
  );
};

export default Home;
