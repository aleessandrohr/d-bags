import Link from "next/link";
import Image from "next/image";
import { useImage } from "../../hooks/useImage";
import { usePrice } from "../../hooks/usePrice";
import { Bag } from "../../@types/Bag";

import { Container, Img, Description } from "./styles";

const BagByPrice: React.FC<Bag> = ({
  name,
  img_path,
  retail_price,
  reference,
}) => {
  const image = useImage(img_path);
  const { newPrice } = usePrice(retail_price);

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
        <span className="price">R$ {newPrice}</span>
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
