import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);
  const now = new Date();

  return (
    <Container>
      <div className="info">
        <h1>D'bags</h1>
        <span>
          &#169; {now.getFullYear()} D'bags. Todos os direitos reservados.
        </span>
      </div>
      <div className="theme">
        <i className="far fa-moon"></i>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={15}
          offColor={colors.switch}
          offHandleColor={colors["switch-color"]}
          onHandleColor={colors["switch-color"]}
          onColor={colors.switch}
          className={"switch"}
        />
      </div>
    </Container>
  );
};

export default Footer;
