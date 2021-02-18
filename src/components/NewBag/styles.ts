import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .right {
		align-items: flex-end;
		text-align: right;
	}

	@media (max-width: 500px) {
		> .right,
		> .left {
			align-items: center;
			text-align: center;
		}
	}
`;

export const Img = styled.div`
	.image {
		background-color: ${({ theme }) => theme.colors.image};
		border-radius: 10px;
		cursor: pointer;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem;

	> h1 {
		font-size: 2.8rem;
	}

	> ul {
		padding: 1.2rem 0;

		> li {
			font-size: 1.8rem;
			font-weight: 500;
		}
	}

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.colors["button-active"]};
		color: ${({ theme }) => theme.colors.secondary};
		width: 10.5rem;
		height: 3rem;
		font-family: "Roboto Mono", monospace;
		font-size: 1.95rem;
		text-decoration: none;
		border-width: 0;
		border-radius: 7px;
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		outline: transparent;
		margin: 1.4rem 2.8rem;
		transition: background-color 0.2s ease, color 0.2s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors["button-hover"]};
			color: ${({ theme }) => theme.colors.primary};
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}

	@media (max-width: 500px) {
		> ul {
			padding: 0.5rem 0;
		}
	}
`;

export const Price = styled.span`
	font-size: 1.8rem;
	font-weight: 300;
	text-decoration: line-through;
	padding: 0.4rem 1rem;
`;

export const Discount = styled.span`
	font-size: 2.4rem;
	font-weight: 600;
	padding: 0.2rem 2rem;
`;
