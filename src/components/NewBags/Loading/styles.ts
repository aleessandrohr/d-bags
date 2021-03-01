import styled from "styled-components";

export const Container = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> .row-reverse {
		flex-direction: row-reverse;
	}

	@media (max-width: 500px) {
		> .row,
		.row-reverse {
			flex-direction: column;
		}
	}
`;
