import styled from "styled-components";

export const Container = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 100vw;
	width: 100vw;
	max-width: 100vw;
	background-color: ${({ theme }) => theme.colors.header};
	color: ${({ theme }) => theme.colors.primary};
	box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
	padding: 0 1.6rem;
	z-index: 200;

	@media (max-width: 768px) {
		display: block;
	}
`;
