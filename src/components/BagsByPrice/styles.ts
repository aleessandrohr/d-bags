import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-family: "Roboto Mono", "Courier New", Courier, monospace;
		font-size: 4rem;
		text-align: center;
		padding: 2rem;

		> span {
			color: ${({ theme }) => theme.colors.yellow};
		}
	}

	> ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 60%;
	}

	@media (max-width: 768px) {
		> ul {
			width: 80%;
		}
	}
`;
