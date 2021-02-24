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
			border-radius: 10px;
			cursor: pointer;
		}
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-size: 2.8rem;
	}

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.blue};
		color: ${({ theme }) => theme.colors.white};
		font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
		font-size: 2rem;
		text-decoration: none;
		border-width: 0;
		border-radius: 7px;
		border: 2px solid transparent;
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		outline: transparent;
		padding: 0.2rem 1.6rem;
		margin: 1rem 0;
		transition: background-color 0.2s ease, color 0.2s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors["button-hover"]};
			color: ${({ theme }) => theme.colors.primary};
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const Price = styled.span`
	font-size: 1.8rem;
	font-weight: 300;
	text-decoration: line-through;
	padding: 0.6rem 0;
`;

export const Discount = styled.span`
	font-size: 2.4rem;
	font-weight: 600;
`;
