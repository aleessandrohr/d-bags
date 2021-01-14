import styled from "styled-components";

export const Container = styled.div`
  > nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.nav};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    padding: 0.3rem;

    > .primary {
      margin-left: 1.6rem;

      > a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondary};
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    > .items {
      > ul {
        display: flex;
        align-items: center;
        margin-right: 2.8rem;

        > li {
          padding: 0.8rem;

          > a {
            text-decoration: none;
            color: ${(props) => props.theme.colors.secondary};
            font-size: 1.2rem;
          }
        }
      }

      > .switch {
        margin-right: 2rem;
      }
    }
  }

  > .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .items {
      display: flex;
      align-items: center;
    }
  }

  > .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    > .desktop {
      display: none;
    }

    > .mobile {
      display: flex;
      flex-direction: column;

      > .primary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 0.6rem;

        > button {
          background: transparent;
          border-width: 0;
          outline: 0;

          > span {
            > i {
              font-size: 1.4rem;
              color: ${(props) => props.theme.colors.secondary};
              cursor: pointer;
            }
          }
        }
      }
      > .items {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.8s ease-in-out;

        > ul {
          flex-direction: column;
          align-items: flex-start;
          margin: 0.4rem 0 0 0.9rem;
        }

        > .switch {
          margin-left: 1.5rem;
        }
      }
    }
  }
`;
