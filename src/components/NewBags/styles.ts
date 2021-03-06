import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> h1 {
		font-family: "Roboto Mono", Segoe UI Emoji, Arial, Helvetica, sans-serif;
		font-size: 4rem;
		padding: 2rem;
	}

	> ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> .row-reverse {
			flex-direction: row-reverse;
		}

		@media (max-width: 500px) {
			> .row,
			.row-reverse {
				flex-direction: column;
			}
		}
	}
`;
