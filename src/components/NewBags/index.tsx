import { Bag } from "../../@types/Bag";

import Loading from "./Loading/index";
import NewBag from "../NewBag/index";

import { Container } from "./styles";

interface Props {
  newBags?: Array<Bag>;
}

const NewBags: React.FC<Props> = ({ newBags }) => {
  return (
    <Container>
      <h1>NOVIDADES</h1>
      {newBags ? (
        <ul>
          {newBags.map((bag: Bag, index) => (
            <NewBag
              name={bag.name}
              retail_price={bag.retail_price}
              handle_type={bag.handle_type}
              type={bag.type}
              length={bag.length}
              width={bag.width}
              height={bag.height}
              img_path={bag.img_path}
              reference={bag.reference}
              direction={index % 3 === 0 ? false : true}
              key={bag.img_path} //temp
            />
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default NewBags;
