import Link from "next/link";

import { Props } from "../types";

import { Container, Flex, Logo, Items } from "./styles";

import { Item } from "../Item";
import { Search } from "../Search";

export const Desktop: React.FC<Props> = ({ data, setData }) => {
	return (
		<Container>
			<Flex>
				<Link href="/" scroll={false}>
					<Logo>D&apos;BAGS</Logo>
				</Link>
				<Items>
					<Item url="/">
						<i className="fas fa-home" />
						Home
					</Item>
					<Item url="/catalog">
						<i className="fas fa-globe" />
						Catálogo
					</Item>
					<Item url="/feedback">
						Feedback
						<i className="far fa-envelope" />
					</Item>
					<Item url="/about">
						Sobre
						<i className="far fa-user" />
					</Item>
				</Items>
			</Flex>
			<Search data={data} setData={setData} />
		</Container>
	);
};
