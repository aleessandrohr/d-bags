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

		> span {
			color: ${({ theme }) => theme.colors.yellow};
		}
	}

	> ul {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 60%;
	}

	@media (max-width: 768px) {
		> ul {
			width: 80%;
		}
	}

	@media (max-width: 390px) {
		> h1 {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}
`;
