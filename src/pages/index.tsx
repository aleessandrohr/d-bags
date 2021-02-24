import { BagsByPrice } from "components/BagsByPrice";
import { NewBags } from "components/NewBags";

import { Container, Background } from "styles/pages/Home";

const Home: React.FC = () => {
	return (
		<Container>
			<Background />
			<NewBags />
			<BagsByPrice />
		</Container>
	);
};

export default Home;
