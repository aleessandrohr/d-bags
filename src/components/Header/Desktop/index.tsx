import Link from "next/link";

import { Container, Logo, Items, Item } from "./styles";

export const Desktop: React.FC = () => (
	<Container>
		<Link href="/" scroll={false}>
			<Logo>D&apos;BAGS</Logo>
		</Link>
		<Items>
			<Item>
				<Link href="/">
					<a>Início</a>
				</Link>
			</Item>
			<Item>
				<Link href="/catalog">
					<a>Catálogo</a>
				</Link>
			</Item>
			<Item>
				<Link href="/feedback">
					<a>Feedback</a>
				</Link>
			</Item>
			<Item>
				<Link href="/about">
					<a>Sobre</a>
				</Link>
			</Item>
		</Items>
	</Container>
);
