import Link from "next/link";
import Image from "next/image";

import { BagsType } from "../../@types/BagsType";

import { Container, Product, Description } from "./styles";

const NewsBags: React.FC<BagsType> = ({
  handle_type,
  img_path,
  name,
  retail_price,
  type,
  direction,
}) => {
  const image = img_path.split(";")[2];

  const oldPrice = ((10 / 100) * retail_price + retail_price)
    .toFixed(2)
    .replace(".", ",");
  const newPrice = retail_price.toFixed(2).replace(".", ",");

  return (
    <Container style={{ flexDirection: direction ? "row-reverse" : "row" }}>
      <div className="product">
        <Product>
          <Image
            src={`${image}`}
            alt={name}
            width={260}
            height={320}
            className="image"
          />
        </Product>
      </div>
      <div className="description">
        <Description style={{ textAlign: direction ? "right" : "left" }}>
          <h1>{name}</h1>
          <ul>
            <li>{type}</li>
            <li>{handle_type}</li>
          </ul>
          <span className="oldPrice">de: R$ {oldPrice}</span>
          <span className="newPrice">por: R$ {newPrice}</span>
          <div className="button">
            <Link href="/">
              <a>Confira</a>
            </Link>
          </div>
        </Description>
      </div>
    </Container>
  );
};

export default NewsBags;
