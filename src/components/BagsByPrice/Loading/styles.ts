import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 2px solid ${({ theme }) => theme.colors.background};
	margin: 1rem;

	.image {
		border-radius: 15px;
		cursor: pointer;
	}

	.price {
		margin: 0.4rem 0;
	}
`;
