import styled from "styled-components";

export const Container = styled.nav`
	display: none;

	> .items-transitions-enter {
		max-height: 0;
	}

	> .items-transitions-enter-active {
		max-height: 200px;
		transition: max-height 800ms;
	}

	> .items-transitions-exit {
		max-height: 200px;
	}

	> .items-transitions-exit-active {
		max-height: 0;
		transition: max-height 600ms;
	}

	@media (max-width: 768px) {
		display: unset;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.a`
	font-family: "Roboto Mono", Arial, Helvetica, sans-serif;
	font-size: 2.8rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Bar = styled.button`
	background-color: transparent;
	border-width: 0;
	outline: transparent;

	> svg {
		font-size: 2.8rem;
		color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
	}
`;

export const Items = styled.ul`
	overflow: hidden;
	display: flex;
	flex-direction: column;

	> li {
		padding: 0.25rem 0;
	}
`;

export const Item = styled.a`
	font-size: 2.2rem;
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover,
	&:focus {
		opacity: 0.7;
	}
`;
