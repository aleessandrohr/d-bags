import Error from "../_error";
import { useFetch } from "../../hooks/useFetch";

import { Container } from "../../styles/pages/Bag";

const bag: React.FC = () => {
  const { data, error } = useFetch("https://dbags.herokuapp.com/public/home");

  if (error) {
    return <Error statusCode={error.status} title={error.statusText} />;
  }

  return <Container />;
};

export default bag;
