import styled from "styled-components";

export const Container = styled.div`
	width: 60vw;
	max-width: 28rem;
	background: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.primary};
	height: 100%;
	overflow-y: auto;
	padding: 2rem;
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
	font-size: 3rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Close = styled.button`
	background-color: transparent;
	border-width: 0;
	outline: transparent;

	> svg {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 3.8rem;
		cursor: pointer;
	}
`;

export const Items = styled.ul`
	padding: 2.5rem 0;
	list-style: none;
`;

export const Item = styled.li`
	padding: 0.5rem 0;

	> a {
		display: block;
		color: ${({ theme }) => theme.colors.primary};
		font-size: 2.4rem;
		text-decoration: none;
		padding: 0.3rem 0;
		cursor: pointer;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.8;
		}
	}
`;
