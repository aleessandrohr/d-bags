import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container, Items, Theme } from "./styles";

interface Props {
  setTheme: Dispatch<SetStateAction<string>>;
}

const Footer: React.FC<Props> = ({ setTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  const now = new Date();
  const year = now.getFullYear();

  return (
    <Container>
      <Items>
        <h1>D'bags</h1>
        <span>&#169; {year} D'bags. Todos os direitos reservados.</span>
      </Items>
      <Theme>
        <i className="far fa-moon"></i>
        <Switch
          onChange={() => setTheme(title === "light" ? "dark" : "light")}
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
      </Theme>
    </Container>
  );
};

export default Footer;
