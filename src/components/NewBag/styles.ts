import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .left {
		align-items: flex-start;
	}

	> .right {
		align-items: flex-end;
	}

	@media (max-width: 768px) {
		display: unset;

		> .left {
			align-items: center;
		}

		> .right {
			align-items: center;
		}
	}
`;

export const Img = styled.div`
	.image {
		background-color: ${({ theme }) => theme.colors.image};
		border-radius: 7px;
		cursor: pointer;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;

	> h1 {
		font-size: 1.8rem;
	}

	> ul {
		padding: 1rem 0;

		> li {
			font-size: 1.2rem;
			font-weight: 500;
		}
	}

	> .oldPrice {
		padding: 0.2rem 1rem;
		text-decoration: line-through;
		font-size: 1.2rem;
		font-weight: 300;
	}

	> .newPrice {
		padding: 0.2rem 1.2rem;
		font-size: 1.6rem;
		font-weight: 600;
	}

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		width: 7rem;
		height: 1.8rem;
		background-color: ${({ theme }) => theme.colors["button-active"]};
		color: ${({ theme }) => theme.colors.secondary};
		margin: 1.5rem 3rem;
		border-width: 0;
		outline: transparent;
		border-radius: 7px;
		font-family: "Roboto Mono", monospace;
		font-size: 1.2rem;
		cursor: pointer;
		transition: background-color 0.5s ease, color 0.4s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors["button-hover"]};
			color: ${({ theme }) => theme.colors.primary};
			border: 2px solid ${({ theme }) => theme.colors.primary};
		}
	}

	@media (max-width: 768px) {
		padding: 0.8rem 0;

		> ul {
			padding: 0.8rem 0;
			text-align: center;
			> li {
				font-size: 1.2rem;
			}
		}

		> .discount {
			font-size: 1.4rem;
		}

		> .price {
			font-size: 1.8rem;
		}
	}
`;
