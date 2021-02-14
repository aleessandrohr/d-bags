import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "styled-components";

import { Container, Items } from "./styles";

export const Loading: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<SkeletonTheme
			color={colors.loading}
			highlightColor={colors["loading-highlight"]}
		>
			<Container>
				<Skeleton width={180} height={180} className="image" />
				<Items>
					<Skeleton width={"10rem"} height={"2.5rem"} className="name" />
					<Skeleton width={"7rem"} height={"2.2rem"} className="price" />
				</Items>
			</Container>
		</SkeletonTheme>
	);
};
