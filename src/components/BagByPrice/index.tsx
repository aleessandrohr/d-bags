import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "../../helpers/imageUrl"; //temp
import { formattedPrice } from "../../helpers/formattedPrice"; //temp
import { Bag } from "../../@types/Bag";

import { Container, Img, Description } from "./styles";

const BagByPrice: React.FC<Bag> = ({
	name,
	img_path,
	retail_price,
	reference,
}) => {
	const image = imageUrl(img_path); //temp
	const { newPrice } = formattedPrice(retail_price); //temp

	return (
		<Container>
			<Img>
				<Image
					src={image}
					alt={name}
					width={180}
					height={180}
					className="image"
				/>
				<span className="discount">-10%</span>
				<span className="price">R$ {newPrice}</span>
			</Img>
			<Description>
				<Link href={`/bag/${reference}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};

export default BagByPrice;
