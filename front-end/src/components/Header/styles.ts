import styled from "styled-components";

export const Container = styled.div``;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.default};
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  z-index: 2;
  transition: opacity 0.8s ease;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    padding-left: 1rem;

    > h1 {
      font-size: 2rem;
    }

    .image {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  > .switch {
    padding-right: 1rem;
  }
`;
