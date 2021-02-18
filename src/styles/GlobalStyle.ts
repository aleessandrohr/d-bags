import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
    background-color: ${({ theme }) => theme.colors["scroll-y"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0.2rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 57.5%;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 55.5%;
    }
  }

  @media (max-width: 280px) {
    html {
      font-size: 52.5%;
    }
  }
`;
