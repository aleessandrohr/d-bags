import Skeleton from "react-loading-skeleton";

import { Container, Img, Description } from "./styles";

interface Props {
	direction: boolean;
}

const NewBag: React.FC<Props> = ({ direction }) => {
	return (
		<Container style={{ flexDirection: direction ? "row-reverse" : "row" }}>
			<Img>
				<Skeleton className="image" width={260} height={320} />
			</Img>
			<Description className={direction ? "right" : "left"}>
				<Skeleton width="15rem" height="2rem" />
				<Skeleton width="8rem" height="1.4rem" count={2} className="item" />
				<Skeleton width="10rem" height="1.8rem" className="discount" />
				<Skeleton width="10rem" height="1.8rem" className="price" />
				<Skeleton width="7rem" height="1.8rem" className="link" />
			</Description>
		</Container>
	);
};

export default NewBag;
