import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, Dispatch, SetStateAction } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";

import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { Container, Flex, Items, Theme } from "./styles";

interface Props {
	setTheme: Dispatch<SetStateAction<string>>;
}

export const Footer: React.FC<Props> = ({ setTheme }) => {
	const { title, colors } = useContext(ThemeContext);

	const now = new Date();
	const year = now.getFullYear();

	return (
		<Container>
			<Flex>
				<Items>
					<h1>D&apos;BAGS</h1>
					<p>&#169; {year} D&apos;Bags. Todos os direitos reservados.</p>
				</Items>
				<Theme>
					<FontAwesomeIcon icon={faMoon} />
					<Switch
						onChange={() => setTheme(title === "light" ? "dark" : "light")}
						checked={title === "dark"}
						checkedIcon={false}
						uncheckedIcon={false}
						height={10}
						width={40}
						handleDiameter={20}
						offColor={colors.blue}
						offHandleColor={colors["switch-color"]}
						onHandleColor={colors["switch-color"]}
						onColor={colors.blue}
					/>
				</Theme>
			</Flex>
		</Container>
	);
};
