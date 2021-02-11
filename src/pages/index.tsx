import BagsByPrice from "@/components/BagsByPrice/index";
import NewBags from "@/components/NewBags/index";

import { Container, Background } from "@/styles/pages/Home";

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
