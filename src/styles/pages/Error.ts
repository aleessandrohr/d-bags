import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	min-height: 100vh;
	max-height: 100vh;

	> h1 {
		font-size: 3rem;
		font-weight: 400;
	}

	> span {
		height: 5rem;
		border: 1px solid ${({ theme }) => theme.colors.primary};
		margin: 0 2rem;
	}

	> h2 {
		font-size: 2.5rem;
		font-weight: 400;
	}
`;
