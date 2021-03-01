import { GetStaticProps } from "next";

import useSWR from "swr";

import { BagByPrice } from "components/BagByPrice";

import { fetcher } from "helpers/fetcher";

import { ErrorFetch } from "types/interfaces/ErrorFetch";
import { IBagByPrice } from "types/interfaces/IBagByPrice";

import { Container } from "./styles";

import { Error } from "./Error";
import { Loading } from "./Loading/";

interface Props {
	initialData?: any;
}

interface Data {
	bagsByPrice?: Array<IBagByPrice>;
}

const url = "https://dbags.herokuapp.com/public/bagsbyprice";

export const BagsByPrice: React.FC<Props> = ({ initialData }) => {
	const { data, error } = useSWR<Data, ErrorFetch>(url, fetcher, {
		initialData,
	});

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
							main_img_path={bag.main_img_path}
							key={bag.id}
						/>
					))}
				</ul>
			)}
			{!data && !error && <Loading />}
			{error && <Error />}
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetcher(url);

	return { props: { initialData: data } };
};
