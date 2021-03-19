import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
`;

export const Img = styled.div`
	> a {
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;

		img {
			background-color: ${({ theme }) => theme.colors.image};
			border-radius: 7px;
			cursor: pointer;
		}
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.blue};
		color: ${({ theme }) => theme.colors.white};
		font-family: "Roboto Mono", "Courier New", Courier, monospace;
		font-size: 2rem;
		text-decoration: none;
		border-radius: 7px;
		border: 2px solid transparent;
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		padding: 0.25rem 1.5rem;
		margin: 0.8rem 0;
		transition: background-color 0.2s ease, color 0.2s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors["button-hover"]};
			color: ${({ theme }) => theme.colors.primary};
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const Title = styled.h1`
	font-size: 2.6rem;
`;

export const Price = styled.span`
	font-size: 2rem;
	font-weight: 600;
	padding: 0.4rem 0;
`;
