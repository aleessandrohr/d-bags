import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.nav};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
  padding: 0.5rem;
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
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;

        > i {
          padding: 0 0.25rem;
          font-size: 1.6rem;
        }
      }

      > .logo {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
