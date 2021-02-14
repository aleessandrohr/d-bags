import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { INewBag } from "types/interfaces/INewBag";

import { Container, Img, Description, Price, Discount } from "./styles";

interface Props extends INewBag {
	direction: boolean;
}

export const NewBag: React.FC<Props> = ({
	id,
	name,
	retail_price,
	retail_price_discount,
	material_type,
	handle_type,
	main_img_path,
	direction,
}) => {
	const price_discount = formatPrice(retail_price_discount);
	const price = formatPrice(retail_price);

	return (
		<Container className={direction ? "row-reverse" : "row"}>
			<Img>
				<Image
					src={main_img_path}
					alt={name}
					width={260}
					height={320}
					className="image"
				/>
			</Img>
			<Description className={direction ? "right" : "left"}>
				<h1>{name}</h1>
				<ul>
					<li>{material_type}</li>
					<li>{handle_type}</li>
				</ul>
				<Price>{price}</Price>
				<Discount>{price_discount}</Discount>
				<Link href={`/bag/${id}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};
