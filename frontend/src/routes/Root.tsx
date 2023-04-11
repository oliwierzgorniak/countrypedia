import logoSvg from "../assets/logo.svg";
import Search from "../components/Search/Search";

export default function Root() {
  return (
    <main>
      <img src={logoSvg} alt="" />
      <Search />
    </main>
  );
}
