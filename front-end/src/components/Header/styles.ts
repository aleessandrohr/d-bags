import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.nav};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 0.2rem;
  z-index: 2;

  > a {
    padding-left: 1rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    > h1 {
      font-size: 2rem;
    }

    > .img {
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
