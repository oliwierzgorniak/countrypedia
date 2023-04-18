import styles from "./Loading.module.css";
import mapSvg from "../../assets/map.svg";

export default function Loading() {
  return (
    <section className={styles.container}>
      <img className={styles.map} src={mapSvg} alt="map" />
      <div className={styles.glass}>🔍</div>
    </section>
  );
}
