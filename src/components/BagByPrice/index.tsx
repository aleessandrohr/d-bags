import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { IBagByPrice } from "types/interfaces/IBagByPrice";

import { Container, Img, Discount, Description, Name, Price } from "./styles";

export const BagByPrice: React.FC<IBagByPrice> = ({
	id,
	name,
	retail_price,
	discount,
	main_img_path,
}) => {
	const price = formatPrice(retail_price);

	return (
		<Link href={`/bag/${id}`}>
			<Container>
				<Img>
					<Image
						src={main_img_path}
						alt={name}
						width={180}
						height={180}
						className="image"
					/>
					<Discount>-{discount}%</Discount>
				</Img>
				<Description>
					<Name>{name}</Name>
					<Price>{price}</Price>
				</Description>
			</Container>
		</Link>
	);
};
