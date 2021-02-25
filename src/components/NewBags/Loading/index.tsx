import { useContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

import { NewBag } from "./NewBag";

export const Loading: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<SkeletonTheme
			color={colors.loading}
			highlightColor={colors["loading-highlight"]}
		>
			<Container>
				{[0, 1].map(skeleton => (
					<NewBag key={skeleton} />
				))}
			</Container>
		</SkeletonTheme>
	);
};
