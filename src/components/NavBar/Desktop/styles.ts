import styled from "styled-components";

export const Container = styled.nav`
	width: 100%;
	max-width: 900px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Item = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.6rem;
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.75;
	}

	> svg {
		font-size: 3.2rem;
		padding: 0 0.6rem;
	}
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	cursor: pointer;
`;
