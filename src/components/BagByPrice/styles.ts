import styled from "styled-components";

export const Container = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.orange};
	color: ${({ theme }) => theme.colors.white};
	border: 2px solid ${({ theme }) => theme.colors.background};
	border-radius: 20px;
	margin: 1rem;
	transition: border 0.2s ease;
	cursor: pointer;

	&:hover {
		border: 2px solid ${({ theme }) => theme.colors.orange};
		border-radius: 15px;
	}
`;

export const Img = styled.div`
	position: relative;

	.image {
		background-color: ${({ theme }) => theme.colors.image};
		color: ${({ theme }) => theme.colors.primary};
		border-radius: 15px 15px 0 0;
	}
`;

export const Discount = styled.span`
	position: absolute;
	right: 0;
	background-color: ${({ theme }) => theme.colors.discount};
	font-size: 1.8rem;
	border-radius: 1.4rem 0 0 1.4rem;
	margin: 1.5rem 0;
	padding: 0.4rem 0.6rem;
`;

export const Description = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Name = styled.span`
	font-size: 2rem;
`;

export const Price = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	padding: 0.5rem 0;
`;
