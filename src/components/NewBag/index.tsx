import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { INewBag } from "types/interfaces/INewBag";

import { Container, Img, Description, Price, Discount } from "./styles";

export const NewBag: React.FC<INewBag> = ({
	id,
	name,
	retail_price,
	retail_price_discount,
	main_img_path,
}) => {
	const price = formatPrice(retail_price);
	const price_discount = formatPrice(retail_price_discount);

	return (
		<Container>
			<Img>
				<Link href={`/bag/${id}`}>
					<a>
						<Image src={main_img_path} alt={name} width={260} height={320} />
					</a>
				</Link>
			</Img>
			<Description>
				<h1>{name}</h1>
				<Price>{price}</Price>
				<Discount>{price_discount}</Discount>
				<Link href={`/bag/${id}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};
