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
		cursor: pointer;
	}

	> .bars {
		font-size: 3rem;
	}

	> .times {
		font-size: 3.8rem;
	}
`;

export const Items = styled.ul`
	overflow: hidden;
	display: flex;
	flex-direction: column;

	> li {
		margin: 0.3rem 0;
	}
`;

export const Item = styled.a`
	display: flex;
	align-items: center;
	font-size: 2.4rem;
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover {
		opacity: 0.75;
	}
`;
