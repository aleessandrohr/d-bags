import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
`;

export const Img = styled.div`
	.image {
		border-radius: 7px;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.price {
		margin: 0.4rem 0;
	}

	.link {
		border-radius: 7px;
		margin: 0.8rem 0;
	}
`;
