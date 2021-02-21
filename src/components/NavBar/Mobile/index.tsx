import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { faBars } from "@fortawesome/free-solid-svg-icons";

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
					<FontAwesomeIcon icon={faBars} />
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
							<Item>Home</Item>
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
