import styles from "./styles/Loading.module.css";
import mapSvg from "../../assets/map.svg";

export default function Loading() {
  return (
    <section className={styles.container}>
      <img
        className={styles.map}
        src={mapSvg}
        alt="map"
        width="512"
        height="512"
      />
      <div className={styles.glass}>🔍</div>
    </section>
  );
}
