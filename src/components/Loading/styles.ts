import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 4rem;
    height: 4rem;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: loading 1.2s infinite;
    border-color: ${({ theme }) => theme.colors.primary} transparent;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
