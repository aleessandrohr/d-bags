import Link from "next/link";

import { Container } from "./styles";

interface Props {
	url: string;
}

export const Item: React.FC<Props> = ({ url, children }) => {
	return (
		<Container>
			<Link href={url}>
				<a>{children}</a>
			</Link>
		</Container>
	);
};
