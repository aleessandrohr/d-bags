import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 1rem;
`;

export const Img = styled.div`
	.image {
		border-radius: 10px;
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
		padding: 0.2rem 1.4rem;
		margin: 0.8rem 0;
	}
`;
