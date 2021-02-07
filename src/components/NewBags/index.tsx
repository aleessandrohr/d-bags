import NewBag from "../NewBag/index";
import Loading from "./Loading/index";

import { useFetch } from "../../hooks/useFetch";

import { Bag } from "../../@types/Bag";

import { Container, Error } from "./styles";

interface Data {
	newBags?: Array<Bag>;
}

const NewBags: React.FC = () => {
	const { data, error } = useFetch<Data>(
		"https://dbags.herokuapp.com/public/newbags",
	);

	return (
		<Container>
			<h1>NOVIDADES</h1>
			{data && (
				<ul>
					{data.newBags?.map((bag: Bag, index) => (
						<NewBag
							name={bag.name}
							retail_price={bag.retail_price}
							retail_price_discount={bag.retail_price_discount}
							handle_type={bag.handle_type}
							type={bag.type}
							length={bag.length}
							width={bag.width}
							height={bag.height}
							img_path={bag.img_path}
							reference={bag.reference}
							direction={index % 3 === 0 ? false : true}
							key={bag.id}
						/>
					))}
				</ul>
			)}
			{!data && !error && <Loading />}
			{error && <Error>Ocorreu um problema.</Error>}
		</Container>
	);
};

export default NewBags;
