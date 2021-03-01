import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "helpers/formatPrice";

import { IBagByPrice } from "types/interfaces/IBagByPrice";

import { Container, Img, Description, Title, Price } from "./styles";

export const BagByPrice: React.FC<IBagByPrice> = ({
	id,
	name,
	retail_price,
	main_img_path,
}) => {
	const price = formatPrice(retail_price);

	return (
		<Container>
			<Img>
				<Link href={`/bag/${id}`}>
					<a>
						<Image src={main_img_path} alt={name} width={200} height={250} />
					</a>
				</Link>
			</Img>
			<Description>
				<Title>{name}</Title>
				<Price>{price}</Price>
				<Link href={`/bag/${id}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};
