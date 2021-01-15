import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.6rem;

  > .description {
  }
`;

export const Product = styled.div`
  > img {
    width: 100%;
    border-radius: 7px;
  }
`;

export const Description = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap");

  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  text-align: left;

  > h1 {
    font-size: 2rem;
  }

  > ul {
    margin-top: 0.6rem;

    > li {
      font-size: 0.95rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.gray};
    }
  }

  > span {
    padding: 1rem 1.2rem;
    font-size: 1.6rem;
    font-weight: 600;
  }

  > .button {
    margin-left: 2.4rem;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 6.8rem;
      height: 1.6rem;
      background-color: ${(props) => props.theme.colors["a-secondary"]};
      color: ${(props) => props.theme.colors["a-primary"]};
      border-width: 0;
      outline: 0;
      border-radius: 7px;
      font-family: "Roboto Mono", monospace;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.5s ease, color 0.4s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors["a-primary"]};
        color: ${(props) => props.theme.colors["a-secondary"]};
        border: 2px solid ${(props) => props.theme.colors["a-secondary"]};
      }
    }
  }
`;
