import Link from "next/link";

import { Container } from "./styles";

const Mobile: React.FC = () => {
  let visibility = false;

  const toggleItems = () => {
    const id = document.getElementById("items-mobile");

    if (id) {
      if (visibility) {
        id.style.maxHeight = "0";
        visibility = false;
      } else {
        id.style.maxHeight = "200px";
        visibility = true;
      }
    }
  };

  return (
    <Container>
      <div className="nav">
        <Link href="/" scroll={false}>
          <a>D'bags</a>
        </Link>
        <button onClick={toggleItems}>
          <span>
            <i className="fas fa-bars" />
          </span>
        </button>
      </div>
      <div className="items" id="items-mobile">
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
    </Container>
  );
};

export default Mobile;
