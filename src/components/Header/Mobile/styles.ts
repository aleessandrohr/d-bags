import styled from "styled-components";

export const Container = styled.nav`
	display: none;

	@media (max-width: 768px) {
		display: unset;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: ${({ theme }) => theme.colors.nav};
		color: ${({ theme }) => theme.colors.primary};
		box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
		padding: 0.6rem;
		z-index: 2;

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

	> a {
		font-size: 2rem;
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		font-weight: 600;
		padding: 0 0.6rem;
	}

	> button {
		padding: 0 0.8rem;
		background-color: transparent;
		border-width: 0;
		outline: transparent;

		> span {
			> i {
				color: ${({ theme }) => theme.colors.primary};
				font-size: 2rem;
				cursor: pointer;
			}
		}
	}
`;

export const Items = styled.div`
	overflow: hidden;

	> ul {
		display: flex;
		flex-direction: column;

		> li {
			padding: 0.4rem 0.6rem;

			> a {
				font-size: 1.4rem;
				color: ${({ theme }) => theme.colors.primary};
				text-decoration: none;
			}
		}
	}
`;
