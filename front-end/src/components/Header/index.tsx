import { useContext } from "react";
import Switch from "react-switch";
import Link from "next/link";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

interface NavProps {
  type: string;
  mobile: boolean;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  let state = false;

  const toggle = () => {
    const id = document.getElementById("items-mobile");
    if (id) {
      if (state) {
        id.style.maxHeight = "0";
        state = false;
      } else {
        id.style.maxHeight = "200px";
        state = true;
      }
    }
  };

  const Nav: React.FC<NavProps> = ({ type, mobile }) => {
    return (
      <nav className={`${type}`}>
        <div className="primary">
          <Link href="/">
            <a>Logo</a>
          </Link>
          {mobile && (
            <button onClick={toggle}>
              <span>
                <i className="fas fa-bars" />
              </span>
            </button>
          )}
        </div>
        <div className="items" id={`items-${type}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Feedback</a>
              </Link>
            </li>
          </ul>
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
            onColor={colors.switch}
            onHandleColor={colors["switch-color"]}
            className={"switch"}
          />
        </div>
      </nav>
    );
  };

  return (
    <Container>
      <Nav type="desktop" mobile={false} />
      <Nav type="mobile" mobile={true} />
    </Container>
  );
};

export default Header;
