import styled from "styled-components";

export const Container = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${({ theme }) => theme.colors.nav};
	color: ${({ theme }) => theme.colors.primary};
	box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.shadow};
	padding: 0.4rem;
	z-index: 2;

	> ul {
		display: flex;
		align-items: center;
		justify-content: space-around;

		> li {
			display: flex;
			align-items: center;
			justify-content: center;

			> a {
				color: ${({ theme }) => theme.colors.primary};
				text-decoration: none;
				font-size: 1.6rem;

				&:hover {
					text-decoration: underline;
				}

				> i {
					padding: 0 0.2rem;
					font-size: 1.6rem;
				}
			}

			> .logo {
				font-family: "JetBrains Mono", monospace;
				font-size: 1.8rem;
				font-weight: 600;
				border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

				&:hover {
					text-decoration: none;
				}
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
