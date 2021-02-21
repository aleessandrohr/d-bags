import { GetStaticProps, GetStaticPaths } from "next";

import { Container } from "styles/pages/Bag";

const Bag: React.FC = () => {
	return <Container />;
};

export default Bag;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id;

	return {
		props: {
			id: id,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: {
					id: "1",
				},
			},
			{
				params: {
					id: "2",
				},
			},
			{
				params: {
					id: "3",
				},
			},
		],
		fallback: "blocking",
	};
};
