import Error from "../../components/Error/Error";

export default function NotFound() {
  return <Error message="Not found ❌" code={404} />;
}
