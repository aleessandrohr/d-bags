import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 1rem;

	> a {
		font-size: 1.8rem;
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;
		opacity: 1;
		transition: opacity 0.2s ease;

		&:hover,
		&:focus {
			opacity: 0.8;
		}

		> i {
			font-size: 1.8rem;
			padding: 0 0.5rem;
		}
	}

	@media (max-width: 772px) {
		display: unset;
		margin: 0;

		> a {
			font-size: 2.2rem;
		}
	}
`;
