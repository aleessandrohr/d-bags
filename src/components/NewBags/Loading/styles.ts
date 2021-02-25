import styled from "styled-components";

export const Container = styled.ul`
	display: flex;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
