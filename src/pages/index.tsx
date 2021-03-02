import { BagsByPrice } from "components/BagsByPrice";
import { NewBags } from "components/NewBags";

import { Container } from "styles/pages/Home";

const Home: React.FC = () => (
	<Container>
		<NewBags />
		<BagsByPrice />
	</Container>
);

export default Home;
