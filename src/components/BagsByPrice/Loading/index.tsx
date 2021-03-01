import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "styled-components";

import { Container, Img, Description } from "./styles";

export const Loading: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<SkeletonTheme
			color={colors.loading}
			highlightColor={colors["loading-highlight"]}
		>
			<Container>
				<Img>
					<Skeleton width={200} height={250} className="image" />
				</Img>
				<Description>
					<Skeleton width={"13rem"} height={"3rem"} className="name" />
					<Skeleton width={"8.5rem"} height={"2.5rem"} className="price" />
					<Skeleton width={"11rem"} height={"3rem"} className="link" />
				</Description>
			</Container>
		</SkeletonTheme>
	);
};
