import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
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
		margin: 0.6rem 0;
	}

	.link {
		border-radius: 7px;
		padding: 0.2rem 1.6rem;
		margin: 1rem 0;
	}
`;
