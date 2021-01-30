import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "../../helpers/imageUrl";
import { formattedPrice } from "../../helpers/formattedPrice";
import { Bag } from "../../@types/Bag";

import { Container, Img, Description } from "./styles";

interface Props extends Bag {
  direction: boolean;
}

const NewBag: React.FC<Props> = ({
  name,
  retail_price,
  type,
  length,
  width,
  height,
  img_path,
  reference,
  direction,
}) => {
  const image = imageUrl(img_path);
  const { oldPrice, newPrice } = formattedPrice(retail_price);

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
          <li>
            {length}x{width}x{height}
          </li>
          <li>{type}</li>
        </ul>
        <span className="oldPrice">de: R$ {oldPrice}</span>
        <br />
        <span className="newPrice">por: R$ {newPrice}</span>
        <div className="link">
          <Link href={`/bag/${reference}`}>
            <a>Confira</a>
          </Link>
        </div>
      </Description>
    </Container>
  );
};

export default NewBag;
