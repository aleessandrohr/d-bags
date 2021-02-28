import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SwipeableDrawer } from "@material-ui/core";

import { Container, Menu, Logo, Close, Items, Item } from "./styles";

interface Props {
	visibility: boolean;
	setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const SideBar: React.FC<Props> = ({ visibility, setVisibility }) => (
	<SwipeableDrawer
		open={visibility}
		onOpen={() => setVisibility(true)}
		onClose={() => setVisibility(false)}
		disableSwipeToOpen
	>
		<Container>
			<Menu>
				<Link href="/" scroll={false}>
					<Logo>D&apos;BAGS</Logo>
				</Link>
				<Close onClick={() => setVisibility(false)} aria-label="Fechar sidebar">
					<FontAwesomeIcon icon={faTimes} />
				</Close>
			</Menu>
			<Items>
				<Item>
					<Link href="/">
						<a onClick={() => setVisibility(false)}>Home</a>
					</Link>
				</Item>
				<Item>
					<Link href="/catalog">
						<a onClick={() => setVisibility(false)}>Catálogo</a>
					</Link>
				</Item>
				<Item>
					<Link href="/feedback">
						<a onClick={() => setVisibility(false)}>Feedback</a>
					</Link>
				</Item>
				<Item>
					<Link href="/about">
						<a onClick={() => setVisibility(false)}>Sobre</a>
					</Link>
				</Item>
			</Items>
		</Container>
	</SwipeableDrawer>
);
