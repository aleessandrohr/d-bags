import Link from "next/link";
import Image from "next/image";

import { BagsType } from "../../@types/BagsType";

import { Container, Product, Description } from "./styles";

interface Props extends BagsType {
  direction: boolean;
}

const NewBag: React.FC<Props> = ({
  name,
  retail_price,
  type,
  handle_type,
  length,
  width,
  height,
  img_path,
  direction,
}) => {
  const image = img_path.split(";")[0];

  const oldPrice = ((10 / 100) * retail_price + retail_price)
    .toFixed(2)
    .replace(".", ",");
  const newPrice = retail_price.toFixed(2).replace(".", ",");

  return (
    <Container style={{ flexDirection: direction ? "row-reverse" : "row" }}>
      <div>
        <Product>
          <Image
            src={image}
            alt={name}
            width={260}
            height={320}
            className="image"
          />
        </Product>
      </div>
      <div>
        <Description style={{ textAlign: direction ? "right" : "left" }}>
          <h1>{name}</h1>
          <ul>
            <li>{type}</li>
            <li>{handle_type}</li>
          </ul>
          <ul>
            <li>Comprimento: {length} cm</li>
            <li>Largura: {width} cm</li>
            <li>Altura: {height} cm</li>
          </ul>
          <span className="oldPrice">de: R$ {oldPrice}</span>
          <span className="newPrice">por: R$ {newPrice}</span>
          <div className="link">
            <Link href="/">
              <a>Confira</a>
            </Link>
          </div>
        </Description>
      </div>
    </Container>
  );
};

export default NewBag;
