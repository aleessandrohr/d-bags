import { NewBag } from "components/NewBag/index";

import { useFetch } from "hooks/useFetch";

import { INewBag } from "types/interfaces/INewBag";

import { Container, Error } from "./styles";

import { Loading } from "./Loading/";

interface Data {
	newBags?: Array<INewBag>;
}

export const NewBags: React.FC = () => {
	const { data, error } = useFetch<Data>(
		"https://dbags.herokuapp.com/public/newbags",
	);

	return (
		<Container>
			<h1>NOVIDADES</h1>
			{data && (
				<ul>
					{data.newBags?.map((bag: INewBag, index) => (
						<NewBag
							id={bag.id}
							name={bag.name}
							retail_price={bag.retail_price}
							retail_price_discount={bag.retail_price_discount}
							material_type={bag.material_type}
							handle_type={bag.handle_type}
							main_img_path={bag.main_img_path}
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
