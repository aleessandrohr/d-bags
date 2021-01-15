import Link from "next/link";
import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Link href="/">
        <a>D-bags</a>
      </Link>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.switch}
        offHandleColor={colors["switch-color"]}
        onHandleColor={colors["switch-color"]}
        onColor={colors.switch}
        className={"switch"}
      />
    </Container>
  );
};

export default Header;
