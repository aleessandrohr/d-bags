import styled from "styled-components";

export const Container = styled.nav`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: unset;
    background-color: ${(props) => props.theme.colors.nav};
    color: ${(props) => props.theme.colors.primary};
    box-shadow: 3px 3px 3px #00000030;
    padding: 0.8rem;
    z-index: 2;

    > .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
        font-size: 2em;
        font-weight: 600;
      }

      > button {
        padding: 0 0.8rem;
        background-color: transparent;
        border-width: 0;
        outline: transparent;

        > span {
          > i {
            color: ${(props) => props.theme.colors.primary};
            font-size: 1.8rem;
            cursor: pointer;
          }
        }
      }
    }

    > .items {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.6s ease-in-out;

      > ul {
        display: flex;
        flex-direction: column;

        > li {
          padding: 0.8rem 0 0 0;

          > a {
            color: ${(props) => props.theme.colors.primary};
            text-decoration: none;
            font-size: 1.25em;
          }
        }
      }
    }
  }
`;
