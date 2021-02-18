import { Container } from "./styles";

import { Desktop } from "./Desktop/index";
import { Mobile } from "./Mobile/index";

export const NavBar: React.FC = () => {
	return (
		<Container>
			<Desktop />
			<Mobile />
		</Container>
	);
};
