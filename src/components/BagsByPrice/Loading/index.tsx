import { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

const Loading: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	return (
		<Container>
			<SkeletonTheme
				color={colors.loading}
				highlightColor={colors["loading-highlight"]}
			>
				<li>
					<Skeleton width={180} height={180} className="image" />
					<Skeleton width={"7rem"} height={"1.8rem"} className="link" />
				</li>
			</SkeletonTheme>
		</Container>
	);
};

export default Loading;
