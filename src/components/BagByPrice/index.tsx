import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { IBagByPrice } from "types/interfaces/IBagByPrice";

import { Container, Img, Discount, Price } from "./styles";

export const BagByPrice: React.FC<IBagByPrice> = ({
	id,
	name,
	retail_price,
	discount,
	main_img_path,
}) => {
	const price = formatPrice(retail_price);

	return (
		<Container>
			<Link href={`/bag/${id}`}>
				<a>
					<Img>
						<Image
							src={main_img_path}
							alt={name}
							width={200}
							height={200}
							className="image"
						/>
						<Discount>-{discount}%</Discount>
					</Img>
				</a>
			</Link>
			<Price>{price}</Price>
		</Container>
	);
};
