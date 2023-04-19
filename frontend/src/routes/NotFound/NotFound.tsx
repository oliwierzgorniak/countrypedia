import Back from "../../components/Back/Back";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div>
        <h1>Not found ❌</h1>
        <span>404</span>
      </div>
      <Back customStyle={styles.back} />
    </main>
  );
}
