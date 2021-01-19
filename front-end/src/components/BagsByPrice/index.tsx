import { BagsType } from "../../@types/BagsType";

import BagByPrice from "../BagByPrice/index";

import { Container } from "./styles";

interface Props {
  bagsByPrice?: BagsType[];
}

const BagsByPrice: React.FC<Props> = ({ bagsByPrice }) => {
  return (
    <Container>
      <h1>
        A partir de <span>R$80</span>
      </h1>
      <div className="bagsByPrice">
        {bagsByPrice?.map((bag: BagsType, index) => (
          <BagByPrice
            name={bag.name}
            img_path={bag.img_path}
            retail_price={bag.retail_price}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default BagsByPrice;
