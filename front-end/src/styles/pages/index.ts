import styled from "styled-components";

export const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
  margin-top: 5rem;
  text-align: center;
`;

export const News = styled.div`
  > h1 {
    font-size: 3.5rem;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;
  }
`;

export const ByPrice = styled.div`
  > h1 {
    margin-top: 1rem;
    font-size: 2.8rem;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;

    > span {
      color: ${(props) => props.theme.colors.yellow};
    }
  }

  > .bagsByPrice {
    margin-top: 2.5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 12rem 12rem 12rem 12rem 12rem;
    justify-content: center;
    align-content: center;
  }
`;
