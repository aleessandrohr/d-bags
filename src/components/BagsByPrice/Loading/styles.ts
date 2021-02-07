import styled from "styled-components";

export const Container = styled.ul`
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.image {
			border-radius: 7px;
			cursor: pointer;
		}

		.link {
			margin: 0.6rem;
		}
	}
`;
