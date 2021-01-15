import Link from "next/link";

import { Container, Product, Description } from "./styles";

interface Props {
  product: string;
  description: {
    item1: string;
    item2: string;
    item3: string;
  };
  price: number;
  img: string;
}

const News: React.FC<Props> = ({ product, description, price, img }) => {
  return (
    <Container>
      <div className="product">
        <Product>
          <img src={img} alt={product} />
        </Product>
      </div>
      <div className="description">
        <Description>
          <h1>{product}</h1>
          <ul>
            <li>{description.item1}</li>
            <li>{description.item2}</li>
            <li>{description.item3}</li>
          </ul>
          <span>por: R$ {price.toFixed(2)}</span>
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

export default News;
