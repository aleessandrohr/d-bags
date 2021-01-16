import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.8rem;
`;

export const Product = styled.div`
  .image {
    border-radius: 7px;
  }
`;

export const Description = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap");

  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  > h1 {
    font-size: 2rem;
  }

  > ul {
    margin-top: 0.6rem;

    > li {
      font-size: 0.95rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  > span {
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  > .oldPrice {
    text-decoration: line-through;
    font-size: 1.4rem;
    font-weight: 300;
  }

  > .button {
    margin: 0 2.4rem;

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
      outline: 0;
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
`;
