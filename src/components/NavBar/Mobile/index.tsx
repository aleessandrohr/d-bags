import Link from "next/link";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Menu, Logo, Bar, Items, Item } from "./styles";

export const Mobile: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<Container>
			<Menu>
				<Link href="/" scroll={false}>
					<Logo>D&apos;BAGS</Logo>
				</Link>
				<Bar onClick={() => setToggle(toggle ? false : true)}>
					<i className="fas fa-bars" />
				</Bar>
			</Menu>
			<CSSTransition
				in={toggle}
				timeout={600}
				classNames="items-transitions"
				unmountOnExit
			>
				<Items>
					<li>
						<Link href="/">
							<Item>Home </Item>
						</Link>
					</li>
					<li>
						<Link href="/catalog">
							<Item>Catálogo</Item>
						</Link>
					</li>
					<li>
						<Link href="/feedback">
							<Item>Feedback</Item>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<Item>Sobre</Item>
						</Link>
					</li>
				</Items>
			</CSSTransition>
		</Container>
	);
};
