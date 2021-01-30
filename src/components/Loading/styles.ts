import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 8px;
    border: 8px solid ${({ theme }) => theme.colors.loading};
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.loading} transparent transparent
      transparent;
  }

  > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  > div:nth-child(3) {
    animation-delay: -0.15s;
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
