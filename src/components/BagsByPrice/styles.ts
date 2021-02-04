import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    padding: 1rem;
    font-size: 2.8rem;
    font-weight: 600;
    font-family: "Roboto Mono", monospace;

    > span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 2.2rem;
    }
  }
`;
