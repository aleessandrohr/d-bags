import Link from "next/link";
import { useContext, useState, useEffect, memo } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container, NavContainer } from "./styles";

interface Props {
  toggleTheme(): void;
}

interface NavProps {
  state: boolean;
  position: "fixed" | "unset";
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const scrollOn = () => {
      if (window.scrollY > 568) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", scrollOn);

    return () => {
      window.removeEventListener("scroll", scrollOn);
    };
  }, []);

  const Nav: React.FC<NavProps> = ({ position, state }) => {
    return (
      <NavContainer
        style={{
          position: position,
          top: 0,
          left: 0,
          right: 0,
          display: state ? "flex" : "none",
        }}
      >
        <Link href="/">
          <a>
            <h1>D'bags</h1>
          </a>
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
      </NavContainer>
    );
  };

  return (
    <Container>
      <Nav position="unset" state={true} />
      <Nav position="fixed" state={visibility} />
    </Container>
  );
};

export default memo(Header);
