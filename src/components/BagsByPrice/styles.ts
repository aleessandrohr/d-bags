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

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    > span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  > .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
  }
`;
