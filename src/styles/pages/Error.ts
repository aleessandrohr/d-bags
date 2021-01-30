import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > h1 {
    padding: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
  }

  > span {
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }

  > h2 {
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
