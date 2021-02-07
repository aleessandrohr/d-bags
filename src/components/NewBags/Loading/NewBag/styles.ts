import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .left {
		align-items: flex-start;
	}

	> .right {
		align-items: flex-end;
	}

	@media (max-width: 768px) {
		display: unset;

		> .left,
		.right {
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
	padding: 0 1rem;

	.item {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
	}

	.discount {
		display: flex;
		flex-direction: column;
		margin: 0.2rem 1rem;
	}

	.price {
		display: flex;
		flex-direction: column;
		margin: 0.2rem 1.2rem;
	}

	.link {
		margin: 1.5rem 3rem;
	}

	@media (max-width: 768px) {
		align-items: center;
		padding: 0.8rem 0;

		.item {
			margin: 0.8rem 0;
		}
	}
`;
