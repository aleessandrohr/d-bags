import Link from "next/link";

import { Container } from "./styles";

const Desktop: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>
              <i className="fas fa-home" /> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/catalog">
            <a>
              <i className="fas fa-globe" /> Catálogo
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" scroll={false}>
            <a className="logo">D'bags</a>
          </Link>
        </li>
        <li>
          <Link href="/feedback">
            <a>
              Feedback <i className="far fa-envelope" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              Sobre <i className="far fa-user" />
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Desktop;
