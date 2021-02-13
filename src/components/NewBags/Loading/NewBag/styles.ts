import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .right {
		align-items: flex-end;
	}

	@media (max-width: 500px) {
		> .right,
		.left {
			align-items: center;
		}
	}
`;

export const Img = styled.div`
	.image {
		border-radius: 7px;
		cursor: pointer;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem;

	.item {
		display: flex;
		flex-direction: column;
		margin: 1.5rem 0;
	}

	.price {
		display: flex;
		flex-direction: column;
		margin: 0.4rem 1rem;
	}

	.discount {
		display: flex;
		flex-direction: column;
		margin: 0.2rem 2rem;
	}

	.link {
		margin: 1.4rem 2.8rem;
	}

	@media (max-width: 768px) {
		.item {
			margin: 0.5rem 0;
		}
	}
`;
