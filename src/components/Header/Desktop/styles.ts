import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1100px;
	height: 5.2rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	font-family: "Roboto Mono", Segoe UI Emoji, Arial, Helvetica, sans-serif;
	font-size: 3.2rem;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
`;

export const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
`;

export const Item = styled.li`
	padding: 0 1rem;

	> a {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 1.75rem;
		text-decoration: none;
		padding: 0.8rem;
		cursor: pointer;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.75;
		}
	}
`;
