import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> h1 {
		font-family: "Roboto Mono", monospace;
		font-size: 4rem;
		padding: 2rem;
	}

	.row-reverse {
		flex-direction: row-reverse;
	}

	@media (max-width: 500px) {
		.row-reverse,
		.row {
			flex-direction: column;
		}
	}
`;

export const Error = styled.span`
	font-size: 1.8rem;
`;
