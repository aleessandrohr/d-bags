import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;

  @media (max-width: 768px) {
    display: unset;

    > .measure-mobile {
    }
  }
`;

export const Img = styled.div`
  background-color: ${(props) => props.theme.colors.image};
  border-radius: 7px;
  cursor: pointer;
`;

export const Description = styled.div`
  padding: 0 1rem;

  > h1 {
    font-size: 1.8rem;
  }

  > ul {
    padding: 0.8rem 0 2rem;

    > li {
      font-size: 0.95rem;
      font-weight: 300;
    }
  }

  > .oldPrice {
    padding: 0 0.8rem;
    text-decoration: line-through;
    font-size: 1.2rem;
    font-weight: 300;
  }

  > .newPrice {
    padding: 0 1.2rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  > .link {
    padding: 1.5rem 3rem;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 6.8rem;
      height: 1.6rem;
      background-color: ${(props) => props.theme.colors["button-active"]};
      color: ${(props) => props.theme.colors.secondary};
      border-width: 0;
      outline: transparent;
      border-radius: 7px;
      font-family: "Roboto Mono", monospace;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.5s ease, color 0.4s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors["button-hover"]};
        color: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;

    > ul {
      text-align: center;
    }
  }
`;
