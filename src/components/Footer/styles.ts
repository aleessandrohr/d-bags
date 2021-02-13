import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.footer};
	color: ${({ theme }) => theme.colors.primary};
	margin: 2rem 0;
	z-index: 2;
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 1250px;

	@media (max-width: 425px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Items = styled.div`
	> h1 {
		font-family: "Space Mono", sans-serif;
		font-size: 2.6rem;
		font-weight: 600;
	}

	> p {
		font-size: 1.6rem;
		font-weight: 200;
		padding: 0.6rem 0;
	}
`;

export const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors["button-hover"]};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 7px;
	padding: 0.6rem 1rem;

	> i {
		padding: 0 0.6rem;
	}

	@media (max-width: 768px) {
		margin: 2rem 0 0 0;
	}
`;
