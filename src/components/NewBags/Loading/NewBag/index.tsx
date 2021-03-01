import Skeleton from "react-loading-skeleton";

import { Container, Img, Description } from "./styles";

interface Props {
	direction: boolean;
}

export const NewBag: React.FC<Props> = ({ direction }) => (
	<Container className={direction ? "row" : "row-reverse"}>
		<Img>
			<Skeleton className="image" width={230} height={300} />
		</Img>
		<Description className={direction ? "row" : "row-reverse"}>
			<Skeleton width="14rem" height="3rem" className="name" />
			<Skeleton width="7rem" height="2.2rem" className="price" />
			<Skeleton width="10rem" height="2.6rem" className="discount" />
			<Skeleton width="11rem" height="3rem" className="link" />
		</Description>
	</Container>
);
