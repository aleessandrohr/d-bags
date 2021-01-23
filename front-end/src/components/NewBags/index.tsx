import { Bags } from "../../@types/Bags";

import NewBag from "../NewBag/index";

import { Container } from "./styles";

interface Props {
  newBags?: Bags[];
}

const NewBags: React.FC<Props> = ({ newBags }) => {
  return (
    <Container>
      <h1>NOVIDADES</h1>
      {newBags?.map((bag: Bags, index) => (
        <NewBag
          name={bag.name}
          retail_price={bag.retail_price}
          handle_type={bag.handle_type}
          type={bag.type}
          length={bag.length}
          width={bag.width}
          height={bag.height}
          img_path={bag.img_path}
          direction={index % 3 === 0 ? false : true}
          key={index}
        />
      ))}
    </Container>
  );
};

export default NewBags;
