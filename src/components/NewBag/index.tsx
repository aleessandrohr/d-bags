import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { INewBag } from "types/interfaces/INewBag";

import { Container, Img, Description, Title, Price, Discount } from "./styles";

interface Props extends INewBag {
	direction: boolean;
}

export const NewBag: React.FC<Props> = ({
	id,
	name,
	retail_price,
	retail_price_discount,
	main_img_path,
	direction,
}) => {
	const price = formatPrice(retail_price);
	const price_discount = formatPrice(retail_price_discount);

	return (
		<Container className={direction ? "row" : "row-reverse"}>
			<Img>
				<Link href={`/bag/${id}`}>
					<a>
						<Image src={main_img_path} alt={name} width={230} height={300} />
					</a>
				</Link>
			</Img>
			<Description className={direction ? "row" : "row-reverse"}>
				<Title>{name}</Title>
				<Price>{price}</Price>
				<Discount>{price_discount}</Discount>
				<Link href={`/bag/${id}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};
