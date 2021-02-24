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
					<Skeleton className="image" width={260} height={320} />
				</Img>
				<Description>
					<Skeleton width="13rem" height="3rem" className="name" />
					<Skeleton width="8rem" height="2.5rem" className="price" />
					<Skeleton width="10rem" height="2.5rem" className="discount" />
					<Skeleton width="14rem" height="3.5rem" className="link" />
				</Description>
			</Container>
		</SkeletonTheme>
	);
};
