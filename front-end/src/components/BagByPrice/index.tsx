import Link from "next/link";
import Image from "next/image";
import { Bags } from "../../@types/Bags";

import { Container, Img, Description } from "./styles";

const BagByPrice: React.FC<Bags> = ({ name, img_path, retail_price }) => {
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
        <span>por: R$ {price}</span>
      </Img>
      <Description>
        <div className="link">
          <Link href="/" scroll={false}>
            <a>Confira</a>
          </Link>
        </div>
      </Description>
    </Container>
  );
};

export default BagByPrice;
