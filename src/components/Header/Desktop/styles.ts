import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1100px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
	font-size: 3rem;
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
	padding: 0 1.8rem;

	> a {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 1.8rem;
		text-decoration: none;
		cursor: pointer;
		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.8;
		}
	}
`;
