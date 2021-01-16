import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.default};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 0.6rem;
    height: 2.2rem;
    background: ${(props) => props.theme.colors.primary};
    margin: 0 3px;
    border-radius: 10px;
    animation: loading 0.8s infinite;
  }

  > div:nth-child(2) {
    animation-delay: 0.1s;
  }

  > div:nth-child(3) {
    animation-delay: 0.2s;
  }

  > div:nth-child(4) {
    animation-delay: 0.3s;
  }

  > div:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes loading {
    0% {
      height: 0rem;
    }

    50% {
      height: 2.2rem;
    }

    100% {
      height: 0rem;
    }
  }
`;