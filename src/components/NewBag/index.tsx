import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "../../helpers/imageUrl"; //temp
import { formattedPrice } from "../../helpers/formattedPrice"; //temp
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
  const image = imageUrl(img_path); //temp
  const { oldPrice, newPrice } = formattedPrice(retail_price); //temp

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
      <Description className={direction ? "right" : "left"}>
        <h1>{name}</h1>
        <ul>
          <li>
            {length}x{width}x{height}
          </li>
          <li>{type}</li>
        </ul>
        <span className="oldPrice">R$ {oldPrice}</span>
        <span className="newPrice">R$ {newPrice}</span>
        <Link href={`/bag/${reference}`}>
          <a>Confira</a>
        </Link>
      </Description>
    </Container>
  );
};

export default NewBag;
