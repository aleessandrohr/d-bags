import { useContext, Dispatch, SetStateAction } from "react";
import Switch from "react-switch";

import { ThemeContext } from "styled-components";

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
					<p>&#169; {year} D&apos;bags. Todos os direitos reservados.</p>
				</Items>
				<Theme>
					<i className="far fa-moon" />
					<Switch
						onChange={() => setTheme(title === "light" ? "dark" : "light")}
						checked={title === "dark"}
						checkedIcon={false}
						uncheckedIcon={false}
						height={10}
						width={40}
						handleDiameter={20}
						offColor={colors.switch}
						offHandleColor={colors["switch-color"]}
						onHandleColor={colors["switch-color"]}
						onColor={colors.switch}
						boxShadow={colors.shadow}
						className={"switch"}
					/>
				</Theme>
			</Flex>
		</Container>
	);
};
