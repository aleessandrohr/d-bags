import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 1rem;
`;

export const Img = styled.div`
	position: relative;

	.image {
		background-color: ${({ theme }) => theme.colors.image};
		border-radius: 7px;
		cursor: pointer;
	}

	> .discount {
		position: absolute;
		right: 0;
		background-color: ${({ theme }) => theme.colors["button-active"]};
		color: ${({ theme }) => theme.colors.secondary};
		padding: 0.2rem 0.4rem;
		border-radius: 12px 2px 12px 8px;
		font-size: 1rem;
	}

	> .price {
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%);
		padding: 0.2rem 0.4rem;
		font-size: 1.4rem;
		font-weight: 600;
	}
`;

export const Description = styled.div`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		width: 7rem;
		height: 1.8rem;
		background-color: ${({ theme }) => theme.colors["button-active"]};
		color: ${({ theme }) => theme.colors.secondary};
		margin: 0.6rem;
		border-width: 0;
		outline: transparent;
		border-radius: 5px;
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
`;
