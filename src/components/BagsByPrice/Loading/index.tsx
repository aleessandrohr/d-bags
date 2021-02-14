import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

export const Loading: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<SkeletonTheme
			color={colors.loading}
			highlightColor={colors["loading-highlight"]}
		>
			<Container>
				<Skeleton width={200} height={200} className="image" />
				<Skeleton width={"7rem"} height={"2.5rem"} className="price" />
			</Container>
		</SkeletonTheme>
	);
};
