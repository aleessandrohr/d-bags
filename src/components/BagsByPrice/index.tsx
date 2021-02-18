import useSWR from "swr";

import { BagByPrice } from "components/BagByPrice";

import { fetcher } from "helpers/fetcher";

import { ErrorFetch } from "types/interfaces/ErrorFetch";
import { IBagByPrice } from "types/interfaces/IBagByPrice";

import { Container, Error } from "./styles";

import { Loading } from "./Loading/";

interface Data {
	bagsByPrice?: Array<IBagByPrice>;
}

export const BagsByPrice: React.FC = () => {
	const { data, error } = useSWR<Data, ErrorFetch>(
		"https://dbags.herokuapp.com/public/bagsbyprice",
		fetcher,
	);

	return (
		<Container>
			<h1>
				A partir de <span>R$80</span>
			</h1>
			{data && (
				<ul>
					{data.bagsByPrice?.map((bag: IBagByPrice) => (
						<BagByPrice
							id={bag.id}
							name={bag.name}
							retail_price={bag.retail_price}
							discount={bag.discount}
							main_img_path={bag.main_img_path}
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

export async function getStaticProps() {
	const data = await fetcher("https://dbags.herokuapp.com/public/bagsbyprice");
	return { props: { data } };
}
