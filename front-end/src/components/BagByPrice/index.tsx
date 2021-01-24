import Link from "next/link";
import Image from "next/image";
import { Bags } from "../../@types/Bags";

import { Container, Img, Description } from "./styles";

const BagByPrice: React.FC<Bags> = ({
  name,
  img_path,
  retail_price,
  reference,
}) => {
  const image = img_path.split(";")[0];
  const price = retail_price.toFixed(2).replace(".", ",");

  return (
    <Container>
      <Img>
        <Image
          src={image}
          alt={name}
          width={180}
          height={180}
          className="image"
        />
        <span className="discount">-10%</span>
        <span className="price">R$ {price}</span>
      </Img>
      <Description>
        <div className="link">
          <Link href={`/bag/${reference}`}>
            <a>Confira</a>
          </Link>
        </div>
      </Description>
    </Container>
  );
};

export default BagByPrice;
