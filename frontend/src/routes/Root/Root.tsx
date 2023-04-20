import Search from "../../components/Search/Search";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <main className={styles.container}>
      <img src="/logo.svg" alt="Countrypedia logo" width="547" height="112" />
      <Search />
    </main>
  );
}
