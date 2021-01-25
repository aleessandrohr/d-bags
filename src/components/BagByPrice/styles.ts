import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Img = styled.div`
  position: relative;

  .image {
    background-color: ${(props) => props.theme.colors.image};
    border-radius: 7px;
    cursor: pointer;
  }

  > .discount {
    position: absolute;
    right: 0;
    background-color: ${(props) => props.theme.colors["button-active"]};
    color: ${(props) => props.theme.colors.secondary};
    padding: 0.2rem 0.4rem;
    border-radius: 10px 0px 10px 5px;
    font-size: 1rem;
    font-weight: 600;
  }

  > .price {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    padding: 0.2rem 0.4rem;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const Description = styled.div`
  > .link {
    padding: 0.5rem;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 6.4rem;
      height: 1.6rem;
      background-color: ${(props) => props.theme.colors["button-active"]};
      color: ${(props) => props.theme.colors.secondary};
      border-width: 0;
      outline: transparent;
      border-radius: 7px;
      font-family: "Roboto Mono", monospace;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.5s ease, color 0.4s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors["button-hover"]};
        color: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
