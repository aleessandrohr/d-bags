import BagByPrice from "../BagByPrice";
import Loading from "./Loading/index";

import { useFetch } from "../../hooks/useFetch";

import { Bag } from "../../@types/Bag";

import { Container, Error } from "./styles";

interface Data {
	bagsByPrice?: Array<Bag>;
}

const BagsByPrice: React.FC = () => {
	const { data, error } = useFetch<Data>(
		"https://dbags.herokuapp.com/public/bagsbyprice",
	);

	return (
		<Container>
			<h1>
				A partir de <span>R$80</span>
			</h1>
			{data && (
				<ul>
					{data.bagsByPrice?.map((bag: Bag) => (
						<BagByPrice
							id={bag.id}
							name={bag.name}
							retail_price={bag.retail_price}
							img_path={bag.img_path}
							key={bag.img_path}
						/>
					))}
				</ul>
			)}
			{!data && !error && <Loading />}
			{error && <Error>Ocorreu um problema.</Error>}
		</Container>
	);
};

export default BagsByPrice;
