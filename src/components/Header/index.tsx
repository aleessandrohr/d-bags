import { Container } from "./styles";

import { Desktop } from "./Desktop/index";
import { Mobile } from "./Mobile/index";

export const Header: React.FC = () => (
	<Container>
		<Desktop />
		<Mobile />
	</Container>
);
