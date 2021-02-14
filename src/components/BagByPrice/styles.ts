import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 1rem;

	> a {
		cursor: pointer;
	}
`;

export const Img = styled.div`
	position: relative;

	.image {
		background-color: ${({ theme }) => theme.colors.image};
		color: ${({ theme }) => theme.colors.primary};
		border-radius: 15px;
	}
`;

export const Discount = styled.span`
	position: absolute;
	right: 0;
	background-color: ${({ theme }) => theme.colors.discount};
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	border-radius: 1.4rem 0 0 1.4rem;
	margin: 1.5rem 0;
	padding: 0.4rem 0.6rem;
`;

export const Price = styled.span`
	font-size: 2rem;
	font-weight: 600;
	padding: 0.4rem 0;
`;
