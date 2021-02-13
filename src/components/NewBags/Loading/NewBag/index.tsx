import Skeleton from "react-loading-skeleton";

import { Container, Img, Description } from "./styles";

interface Props {
	direction: boolean;
}

export const NewBag: React.FC<Props> = ({ direction }) => {
	return (
		<Container className={direction ? "row-reverse" : "row"}>
			<Img>
				<Skeleton className="image" width={260} height={320} />
			</Img>
			<Description className={direction ? "right" : "left"}>
				<Skeleton width="16rem" height="2.8rem" />
				<Skeleton width="8rem" height="2rem" count={2} className="item" />
				<Skeleton width="10rem" height="2.5rem" className="price" />
				<Skeleton width="10rem" height="2.5rem" className="discount" />
				<Skeleton width="11rem" height="2.8rem" className="link" />
			</Description>
		</Container>
	);
};
