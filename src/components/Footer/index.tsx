import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, Dispatch, SetStateAction } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";

import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { Container, Flex, Items, Theme, Moon } from "./styles";

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
					<Moon
						onClick={() => setTheme(title === "light" ? "dark" : "light")}
						aria-labe="Alterar tema"
					>
						<FontAwesomeIcon icon={faMoon} />
					</Moon>
					<Switch
						onChange={() => setTheme(title === "light" ? "dark" : "light")}
						checked={title === "dark"}
						checkedIcon={false}
						uncheckedIcon={false}
						height={12}
						width={35}
						handleDiameter={20}
						onColor={colors.switch}
						offColor={colors.switch}
						onHandleColor={colors["switch-color"]}
						offHandleColor={colors["switch-color"]}
					/>
				</Theme>
			</Flex>
		</Container>
	);
};
