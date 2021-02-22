import { GetStaticProps, GetStaticPaths } from "next";

import { Container } from "styles/pages/Bag";

const Bag: React.FC = () => {
	return <Container />;
};

export default Bag;

export const getStaticProps: GetStaticProps = async () => {
	return {
		notFound: true,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};
