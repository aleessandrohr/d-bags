import Image from "next/image";

import { BagsType } from "../../@types/BagsType";

import { Container } from "./styles";

const BagsByPrice: React.FC<BagsType> = ({ name, img_path, retail_price }) => {
  const image = img_path.split(";")[2];
  const price = retail_price.toFixed(2).replace(".", ",");

  return (
    <Container>
      <Image
        src={image}
        alt={name}
        width={180}
        height={180}
        className="image"
      />
      <span>por: R$ {price}</span>
    </Container>
  );
};

export default BagsByPrice;
