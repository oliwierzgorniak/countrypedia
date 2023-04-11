import logoSvg from "../../assets/logo.svg";
import Search from "../../components/Search/Search";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <main className={styles.container}>
      <img src={logoSvg} alt="Countrypedia logo" />
      <Search />
    </main>
  );
}
