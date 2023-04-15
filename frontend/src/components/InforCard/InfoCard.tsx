import styles from "./InfoCard.module.css";
import addSpacesNumber from "./func/addSpacesNumber";

type InfoCardProps = {
  title: CardTitle;
  infoKeys: string[];
  data: { [key: string]: string | number | undefined };
};

export default function InfoCard({ title, infoKeys, data }: InfoCardProps) {
  return (
    <section className={styles.card}>
      <h2>
        {title.text} {title.emoji}
      </h2>
      <ul>
        {infoKeys.map((key) => (
          <li key={key}>
            <span className={styles.key}>{key}: </span>
            <span className={styles.information}>
              {addSpacesNumber(data[key])}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
