import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 2px solid ${({ theme }) => theme.colors.background};
	margin: 1rem;

	.image {
		border-radius: 15px 15px 0 0;
		cursor: pointer;
	}
`;

export const Items = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.price {
		margin: 0.5rem 0;
	}
`;
