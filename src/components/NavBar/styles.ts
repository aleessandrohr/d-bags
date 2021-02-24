import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.primary};
	box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
	padding: 0.6rem 0;
	z-index: 2;

	@media (max-width: 768px) {
		display: unset;
		padding: 0.6rem 1rem;
	}
`;
