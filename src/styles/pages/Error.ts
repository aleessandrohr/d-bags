import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> h1 {
			font-size: 10rem;
			font-weight: normal;
		}

		> p {
			font-size: 2rem;
			text-align: center;
			padding: 2rem;
		}

		> a {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: ${({ theme }) => theme.colors.blue};
			color: ${({ theme }) => theme.colors.white};
			font-family: "Open Sans", Arial, Helvetica, sans-serif;
			font-size: 1.4rem;
			text-decoration: none;
			text-transform: uppercase;
			border-radius: 3px;
			box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
			padding: 1.5rem;
			transition: opacity 0.2s ease;

			&:hover {
				opacity: 0.75;
			}
		}
	}
`;
