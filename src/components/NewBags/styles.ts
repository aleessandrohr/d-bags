import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> h1 {
		font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
		font-size: 4rem;
		padding: 2rem;
	}

	> ul {
		display: flex;
	}

	@media (max-width: 600px) {
		> ul {
			flex-direction: column;
		}
	}
`;
