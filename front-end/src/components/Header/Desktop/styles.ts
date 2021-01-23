import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.nav};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: 3px 3px 3px #00000030;
  padding: 0.8rem;
  z-index: 2;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-around;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;

      > a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
        font-size: 1.6em;
        display: flex;
        align-items: center;
        justify-content: center;

        > i {
          padding: 0 0.4rem;
          font-size: 1.4rem;
        }
      }

      > .title {
        font-size: 2em;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
