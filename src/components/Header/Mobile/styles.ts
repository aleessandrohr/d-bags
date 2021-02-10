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
		box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.shadow};
		padding: 0.4rem;
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
		font-family: "JetBrains Mono", monospace;
		font-size: 1.8rem;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		padding: 0 0.6rem;
	}

	> button {
		padding: 0.2rem 0.6rem;
		background-color: transparent;
		border-width: 0;
		outline: transparent;

		> span {
			> i {
				font-size: 2rem;
				color: ${({ theme }) => theme.colors.primary};
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

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
