import styled from "styled-components";

export const Container = styled.nav`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: unset;
    background-color: ${({ theme }) => theme.colors.nav};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 3px 3px 3px #00000030;
    padding: 0.8rem;
    z-index: 2;

    > .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > a {
        color: ${({ theme }) => theme.colors.primary};
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
            color: ${({ theme }) => theme.colors.primary};
            font-size: 1.8rem;
            cursor: pointer;
          }
        }
      }
    }

    > .items-transitions-enter {
      max-height: 0;
    }

    > .items-transitions-enter-active {
      max-height: 200px;
      transition: max-height 800ms;
    }

    > .items-transitions-exit {
      max-height: 200px;
    }

    > .items-transitions-exit-active {
      max-height: 0;
      transition: max-height 600ms;
    }

    > .items {
      overflow: hidden;

      > ul {
        display: flex;
        flex-direction: column;

        > li {
          padding: 0.8rem 0 0 0;

          > a {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: none;
            font-size: 1.25em;
          }
        }
      }
    }
  }
`;
