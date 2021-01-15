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
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 0.4rem;

  > a {
    padding-left: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.6rem;
  }

  > .switch {
    padding-right: 1rem;
  }
`;
