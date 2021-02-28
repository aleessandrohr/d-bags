import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Container, Menu, Logo, Bar } from "./styles";

import { SideBar } from "./SideBar";

export const Mobile: React.FC = () => {
	const [visibility, setVisibility] = useState(false);

	const isDesktop = useMediaQuery({ minWidth: 768 });

	if (isDesktop && visibility) setVisibility(false);

	return (
		<Container>
			<Menu>
				<Link href="/" scroll={false}>
					<Logo>D&apos;BAGS</Logo>
				</Link>
				<Bar onClick={() => setVisibility(true)} aria-label="Abrir sidebar">
					<FontAwesomeIcon icon={faBars} />
				</Bar>
			</Menu>
			<SideBar visibility={visibility} setVisibility={setVisibility} />
		</Container>
	);
};
