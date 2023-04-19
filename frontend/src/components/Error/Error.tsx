import Back from "../Back/Back";
import styles from "./Error.module.css";

type ErrorProps = {
  message: string;
  code?: number;
};

export default function Error({ message, code }: ErrorProps) {
  return (
    <main className={styles.container}>
      <div>
        <h1>{message}</h1>
        <span>{code}</span>
      </div>
      <Back customStyle={styles.back} />
    </main>
  );
}
