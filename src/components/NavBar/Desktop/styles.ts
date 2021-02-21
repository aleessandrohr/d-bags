import styled from "styled-components";

export const Container = styled.nav`
	width: 100%;
	max-width: 800px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", sans-serif;
	font-size: 3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	cursor: pointer;
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
	font-size: 2.5rem;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover,
	&:focus {
		opacity: 0.7;
	}

	> i {
		font-size: 2.2rem;
		padding: 0 0.5rem;
	}
`;
