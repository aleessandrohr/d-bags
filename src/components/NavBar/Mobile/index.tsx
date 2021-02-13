import Link from "next/link";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { Props } from "../types";

import { Container, Menu, Logo, Bar, Items } from "./styles";

import { Item } from "../Item";
import { Search } from "../Search";

export const Mobile: React.FC<Props> = ({ data, setData }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<Container>
			<Menu>
				<Link href="/" scroll={false}>
					<Logo>D&apos;BAGS</Logo>
				</Link>
				<Bar onClick={() => setToggle(toggle ? false : true)}>
					<span>
						<i className="fas fa-bars" />
					</span>
				</Bar>
			</Menu>
			<CSSTransition
				in={toggle}
				timeout={600}
				classNames="items-transitions"
				unmountOnExit
			>
				<Items>
					<Search data={data} setData={setData} />
					<Item url="/">Home</Item>
					<Item url="/catalog">Catálogo</Item>
					<Item url="/feedback">Feedback</Item>
					<Item url="/about">Sobre</Item>
				</Items>
			</CSSTransition>
		</Container>
	);
};
