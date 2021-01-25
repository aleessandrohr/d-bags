import Desktop from "./Desktop/index";
import Mobile from "./Mobile/index";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Desktop />
      <Mobile />
    </Container>
  );
};

export default Header;
