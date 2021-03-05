import styled from "styled-components";

export const Container = styled.nav`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5.2rem;
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Segoe UI Emoji, Arial, Helvetica, sans-serif;
	font-size: 3.2rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Bar = styled.button`
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
		font-size: 3rem;
	}
`;
