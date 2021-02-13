import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2rem;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	padding: 0.5rem 1rem;

	> input {
		background: transparent;
		color: ${({ theme }) => theme.colors.primary};
		border-width: 0;
		outline: transparent;
		width: 25rem;
		font-size: 1.8rem;
		font-weight: 200;
		padding: 0 1rem;

		&::placeholder {
			color: ${({ theme }) => theme.colors.primary};
			opacity: 1;
		}

		&:focus::placeholder {
			opacity: 0;
		}
	}

	> button {
		background: transparent;
		border-width: 0;
		outline: transparent;

		> span {
			> i {
				font-size: 1.8rem;
				color: ${({ theme }) => theme.colors.search};
				padding: 0 0.2rem;
				cursor: pointer;
			}
		}
	}

	@media (max-width: 772px) {
		margin: 0.8rem 0;

		> input {
			width: 100%;
		}
	}
`;
