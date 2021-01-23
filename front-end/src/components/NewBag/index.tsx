import Link from "next/link";
import Image from "next/image";
import { Bags } from "../../@types/Bags";

import { Container, Img, Description } from "./styles";

interface Props extends Bags {
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
      <Img>
        <Image
          src={image}
          alt={name}
          width={260}
          height={320}
          className="image"
        />
      </Img>
      <Description style={{ textAlign: direction ? "right" : "left" }}>
        <h1>{name}</h1>
        <ul>
          <li>{type}</li>
          <li>{handle_type}</li>
        </ul>
        <ul>
          <li>
            {length}x{width}x{height}
          </li>
        </ul>
        <span className="oldPrice">de: R$ {oldPrice}</span>
        <br />
        <span className="newPrice">por: R$ {newPrice}</span>
        <div className="link">
          <Link href="/" scroll={false}>
            <a>Confira</a>
          </Link>
        </div>
      </Description>
    </Container>
  );
};

export default NewBag;
