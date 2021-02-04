import { useContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeContext } from "styled-components";

import NewBag from "./NewBag/index";

import { Container } from "./styles";

const Loading: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <SkeletonTheme
      color={colors.loading}
      highlightColor={colors["loading-highlight"]}
    >
      <Container>
        {[0, 1].map((item, index) => (
          <NewBag key={item} direction={index % 3 === 0 ? false : true} />
        ))}
      </Container>
    </SkeletonTheme>
  );
};

export default Loading;
