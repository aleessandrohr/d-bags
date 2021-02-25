import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export const Error: React.FC = () => {
	return (
		<Container>
			<FontAwesomeIcon icon={faExclamationTriangle} />
			<p>Ocorreu um problema.</p>
		</Container>
	);
};
