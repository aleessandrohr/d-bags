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
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
	font-size: 3rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Bar = styled.button`
	background-color: transparent;
	border-width: 0;
	outline: transparent;

	> svg {
		color: ${({ theme }) => theme.colors.primary};
		font-size: 3rem;
		cursor: pointer;
	}
`;
