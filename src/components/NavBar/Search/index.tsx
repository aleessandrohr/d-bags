import React from "react";

import { Props } from "../types";

import { Container } from "./styles";

export const Search: React.FC<Props> = ({ data, setData }) => {
	return (
		<Container onSubmit={e => e.preventDefault}>
			<button>
				<span>
					<i className="fas fa-search" />
				</span>
			</button>
			<input
				type="text"
				placeholder="Procurar por..."
				value={data}
				onChange={e => setData(e.target.value)}
			/>
		</Container>
	);
};
