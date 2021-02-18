import Link from "next/link";

import { Container, Logo, Items, Item } from "./styles";

export const Desktop: React.FC = () => {
	return (
		<Container>
			<Items>
				<li>
					<Link href="/">
						<Item>
							<i className="fas fa-home" />
							<span>Home</span>
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/catalog">
						<Item>
							<i className="fas fa-globe" />
							<span>Catálogo</span>
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/" scroll={false}>
						<Logo>D&apos;BAGS</Logo>
					</Link>
				</li>
				<li>
					<Link href="/feedback">
						<Item>
							<span>Feedback</span>
							<i className="far fa-envelope" />
						</Item>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<Item>
							<span>Sobre</span>
							<i className="far fa-user" />
						</Item>
					</Link>
				</li>
			</Items>
		</Container>
	);
};
