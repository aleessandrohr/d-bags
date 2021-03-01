import styled from "styled-components";

export const Container = styled.li`
	display: flex;
	padding: 1.5rem;

	> .row-reverse {
		align-items: flex-end;
	}

	@media (max-width: 500px) {
		> .row,
		.row-reverse {
			align-items: center;
		}
	}
`;

export const Img = styled.div`
	.image {
		border-radius: 7px;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1.5rem;

	.price {
		margin: 0.4rem 0.8rem;
	}

	.discount {
		margin: 0 1.8rem;
	}

	.link {
		border-radius: 7px;
		margin: 1rem 2.8rem;
	}
`;
