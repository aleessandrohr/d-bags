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
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors["scroll-y"]};
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1.5px;
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
