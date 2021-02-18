import { useMediaQuery } from "react-responsive";

import { Container } from "./styles";

import { Desktop } from "./Desktop/index";
import { Mobile } from "./Mobile/index";

export const NavBar: React.FC = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 768px)",
	});

	return <Container>{isMobile ? <Mobile /> : <Desktop />}</Container>;
};
