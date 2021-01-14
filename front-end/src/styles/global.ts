import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  @media(max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media(max-width: 320px) {
    html {
      font-size: 12px;
    }
  }

  @media(max-width: 280px) {
    html {
      font-size: 10px;
    }
  }
`;
