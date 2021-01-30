import Link from "next/link";
import { useState, memo } from "react";
import { CSSTransition } from "react-transition-group";

import { Container } from "./styles";

const Mobile: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <div className="nav">
        <Link href="/" scroll={false}>
          <a>D'bags</a>
        </Link>
        <button onClick={() => setToggle(toggle ? false : true)}>
          <span>
            <i className="fas fa-bars" />
          </span>
        </button>
      </div>
      <CSSTransition
        in={toggle}
        timeout={600}
        classNames="items-transitions"
        unmountOnExit
      >
        <div className="items">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/catalog">
                <a>Catálogo</a>
              </Link>
            </li>
            <li>
              <Link href="/feedback">
                <a>Feedback</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default memo(Mobile);
