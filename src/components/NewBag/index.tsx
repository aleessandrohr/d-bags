import Image from "next/image";
import Link from "next/link";

import { imageUrl } from "../../helpers/imageUrl"; //temp

import { Bag } from "../../@types/Bag";

import { Container, Img, Description } from "./styles";

interface Props extends Bag {
	direction: boolean;
}

const NewBag: React.FC<Props> = ({
	id,
	name,
	retail_price,
	retail_price_discount,
	type,
	length,
	width,
	height,
	img_path,
	direction,
}) => {
	const image = imageUrl(img_path); //temp

	return (
		<Container style={{ flexDirection: direction ? "row-reverse" : "row" }}>
			<Img>
				<Image
					src={image}
					alt={name}
					width={260}
					height={320}
					className="image"
				/>
			</Img>
			<Description
				className={direction ? "right" : "left"}
				style={{ textAlign: direction ? "right" : "left" }}
			>
				<h1>{name}</h1>
				<ul>
					<li>
						{length}x{width}x{height}
					</li>
					<li>{type}</li>
				</ul>
				<span className="discount">R$ {retail_price}</span>
				<span className="price">R$ {retail_price_discount}</span>
				<Link href={`/bag/${id}`}>
					<a>Confira</a>
				</Link>
			</Description>
		</Container>
	);
};

export default NewBag;
