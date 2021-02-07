import Link from "next/link";

import { useState, memo } from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Menu, Items } from "./styles";

const Mobile: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<Container>
			<Menu>
				<Link href="/" scroll={false}>
					<a>D&apos;bags</a>
				</Link>
				<button onClick={() => setToggle(toggle ? false : true)}>
					<span>
						<i className="fas fa-bars" />
					</span>
				</button>
			</Menu>
			<CSSTransition
				in={toggle}
				timeout={600}
				classNames="items-transitions"
				unmountOnExit
			>
				<Items>
					<ul>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/catalog">
								<a>Catálogo</a>
							</Link>
						</li>
						<li>
							<Link href="/feedback">
								<a>Feedback</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>Sobre</a>
							</Link>
						</li>
					</ul>
				</Items>
			</CSSTransition>
		</Container>
	);
};

export default memo(Mobile);
