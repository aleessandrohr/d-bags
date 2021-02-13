import styled from "styled-components";

export const Container = styled.nav`
	display: none;

	@media (max-width: 772px) {
		display: unset;

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
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.a`
	font-family: "Space Mono", sans-serif;
	font-size: 2.5rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Bar = styled.button`
	background-color: transparent;
	border-width: 0;
	outline: transparent;

	> span {
		> i {
			font-size: 2.6rem;
			color: ${({ theme }) => theme.colors.primary};
			cursor: pointer;
		}
	}
`;

export const Items = styled.ul`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin: 0.2rem 0;
`;
