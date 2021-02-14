import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	> h1 {
		font-family: "Roboto Mono", monospace;
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
		width: 70%;
	}
`;

export const Error = styled.span`
	font-size: 1.8rem;
`;
