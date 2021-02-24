import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100vh;
	max-height: 100vh;
	margin: -5rem 0 0 0;

	> svg {
		font-size: 12rem;
		color: ${({ theme }) => theme.colors.blue};
		margin: 0 0 2rem 0;
	}

	> h1 {
		font-size: 5rem;
		font-weight: 400;
		margin: 0 0 1rem 0;
	}

	> p {
		font-size: 1.8rem;
		font-weight: 200;
	}
`;
