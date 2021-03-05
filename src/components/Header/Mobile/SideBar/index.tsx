import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTimes, faHome, faGlobe } from "@fortawesome/free-solid-svg-icons";
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
					<Logo onClick={() => setVisibility(false)}>D&apos;BAGS</Logo>
				</Link>
				<Close onClick={() => setVisibility(false)} aria-label="Fechar sidebar">
					<FontAwesomeIcon icon={faTimes} />
				</Close>
			</Menu>
			<Items>
				<Item>
					<Link href="/">
						<a onClick={() => setVisibility(false)}>
							<FontAwesomeIcon icon={faHome} fixedWidth />
							Início
						</a>
					</Link>
				</Item>
				<Item>
					<Link href="/catalog">
						<a onClick={() => setVisibility(false)}>
							<FontAwesomeIcon icon={faGlobe} fixedWidth />
							Catálogo
						</a>
					</Link>
				</Item>
				<Item>
					<Link href="/feedback">
						<a onClick={() => setVisibility(false)}>
							<FontAwesomeIcon icon={faEnvelope} fixedWidth />
							Feedback
						</a>
					</Link>
				</Item>
				<Item>
					<Link href="/about">
						<a onClick={() => setVisibility(false)}>
							<FontAwesomeIcon icon={faUser} fixedWidth />
							Sobre
						</a>
					</Link>
				</Item>
			</Items>
		</Container>
	</SwipeableDrawer>
);
