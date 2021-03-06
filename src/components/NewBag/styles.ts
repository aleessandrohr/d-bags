import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .row-reverse {
		align-items: flex-end;
	}

	@media (max-width: 500px) {
		> .row,
		.row-reverse {
			align-items: center;
		}
	}
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
	padding: 0.5rem 1.5rem;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors.blue};
		color: ${({ theme }) => theme.colors.white};
		font-family: "Roboto Mono", Segoe UI Emoji, Arial, Helvetica, sans-serif;
		font-size: 2rem;
		text-decoration: none;
		border-radius: 7px;
		border: 2px solid transparent;
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		padding: 0.25rem 1.5rem;
		margin: 1rem 2.8rem;
		transition: background-color 0.2s ease, color 0.2s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors["button-hover"]};
			color: ${({ theme }) => theme.colors.primary};
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const Title = styled.h1`
	font-size: 2.8rem;
`;

export const Price = styled.span`
	font-size: 1.8rem;
	font-weight: 200;
	text-decoration: line-through;
	padding: 0.4rem 0.8rem;
`;

export const Discount = styled.span`
	font-size: 2.4rem;
	font-weight: 600;
	padding: 0 1.8rem;
`;
