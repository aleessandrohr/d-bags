import { Bag } from "../../@types/Bag";

import BagByPrice from "../BagByPrice";

import { Container } from "./styles";

interface Props {
  bagsByPrice?: Array<Bag>;
}

const BagsByPrice: React.FC<Props> = ({ bagsByPrice }) => {
  return (
    <Container>
      <h1>
        A partir de <span>R$80</span>
      </h1>
      <div className="container">
        {bagsByPrice?.map((bag: Bag) => (
          <BagByPrice
            name={bag.name}
            retail_price={bag.retail_price}
            img_path={bag.img_path}
            reference={bag.reference}
            key={bag.img_path}
          />
        ))}
      </div>
    </Container>
  );
};

export default BagsByPrice;
