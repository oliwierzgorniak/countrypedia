import Search from "../../components/Search/Search";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <main className={styles.container}>
      <img src="/logo.svg" alt="Countrypedia logo" width="547" height="112" />
      <Search />
      <a href="https://github.com/oliwierzgorniak/countrypedia" target="_blank">
        <img
          src="/github-mark.svg"
          alt="github logo"
          className={styles.github}
          width="32"
          height="31.25"
        />
      </a>
    </main>
  );
}
