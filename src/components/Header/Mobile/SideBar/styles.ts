import styled from "styled-components";

export const Container = styled.div`
	width: 75vw;
	max-width: 30rem;
	height: 100%;
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.primary};
	padding: 2rem;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Segoe UI Emoji, Arial, Helvetica, sans-serif;
	font-size: 3.2rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Close = styled.button`
	background-color: transparent;
	border-width: 0;
	outline: transparent;
	padding: 0.8rem;
	cursor: pointer;
	transition: opacity 0.2 ease;

	&:hover {
		opacity: 0.75;
	}

	> svg {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 3.8rem;
	}
`;

export const Items = styled.ul`
	list-style: none;
	padding: 2rem 0;
`;

export const Item = styled.li`
	padding: 0.4rem 0;

	> a {
		display: flex;
		align-items: center;
		color: ${({ theme }) => theme.colors.primary};
		font-size: 2.6rem;
		text-decoration: none;
		padding: 0.4rem 0;
		cursor: pointer;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.75;
		}

		> svg {
			margin-right: 1rem;
		}
	}
`;
