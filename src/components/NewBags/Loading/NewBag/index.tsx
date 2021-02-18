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
				<Skeleton width="16rem" height="3rem" />
				<Skeleton width="6rem" height="2rem" count={2} className="item" />
				<Skeleton width="8rem" height="2.2rem" className="price" />
				<Skeleton width="10rem" height="2.5rem" className="discount" />
				<Skeleton width="10.5rem" height="3rem" className="link" />
			</Description>
		</Container>
	);
};
