import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-size: 10rem;
		font-weight: 400;
	}

	> p {
		font-size: 2rem;
		font-weight: 200;
		padding: 2rem;
	}

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.blue};
		color: ${({ theme }) => theme.colors.white};
		font-family: "Roboto Mono", "Courier New", Courier, monospace;
		text-decoration: none;
		border-radius: 5px;
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		padding: 1rem;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.75;
		}
	}
`;
