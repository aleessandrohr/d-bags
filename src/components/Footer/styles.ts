import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.footer};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
  z-index: 2;

  > .info {
    > h1 {
      font-size: 1.6rem;
      font-weight: 600;
      padding: 0.6rem 0;
    }

    > span {
      font-size: 1rem;
      font-weight: 200;
    }
  }

  > .theme {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem 1rem;
    background-color: ${(props) => props.theme.colors["button-hover"]};
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 7px;

    > i {
      padding: 0 0.4rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

    > .theme {
      margin: 2rem 0 0.5rem 0;
    }
  }
`;
