import styled from "styled-components";

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 1250px;

	@media (max-width: 772px) {
		display: none;
	}
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.a`
	font-family: "Space Mono", sans-serif;
	font-size: 2.5rem;
	font-weight: 600;
	cursor: pointer;
`;

export const Items = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 1.5rem;
`;
