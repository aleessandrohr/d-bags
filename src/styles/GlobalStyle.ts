import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	html, body {
		min-height: 100%;
	}

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
		overflow-x: hidden;
  }

	main {
		min-height: calc(100vh - 5.6rem);
	}

  ::-webkit-scrollbar {
    width: 3px;
    background-color: ${({ theme }) => theme.colors["scroll-y"]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 60.5%;
    }
  }
`;
