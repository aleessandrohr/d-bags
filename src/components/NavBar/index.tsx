import { useState } from "react";

import { Container } from "./styles";

import { Desktop } from "./Desktop/index";
import { Mobile } from "./Mobile/index";

export const NavBar: React.FC = () => {
	const [data, setData] = useState("");

	return (
		<Container>
			<Desktop data={data} setData={setData} />
			<Mobile data={data} setData={setData} />
		</Container>
	);
};
