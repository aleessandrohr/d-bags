import { Bags } from "../../@types/Bags";

import BagByPrice from "../BagByPrice";

import { Container } from "./styles";

interface Props {
  bagsByPrice?: Bags[];
}

const BagsByPrice: React.FC<Props> = ({ bagsByPrice }) => {
  return (
    <Container>
      <h1>
        A partir de <span>R$80</span>
      </h1>
      <div className="container">
        {bagsByPrice?.map((bag: Bags, index) => (
          <BagByPrice
            name={bag.name}
            retail_price={bag.retail_price}
            img_path={bag.img_path}
            reference={bag.reference}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default BagsByPrice;
