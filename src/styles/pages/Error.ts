import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100vh;
	max-height: 100vh;

	> svg {
		color: ${({ theme }) => theme.colors.blue};
		font-size: 10rem;
	}

	> h1 {
		font-size: 5rem;
		font-weight: 400;
		padding: 2rem 0;
	}

	> p {
		font-size: 1.6rem;
		font-weight: 200;
	}
`;
