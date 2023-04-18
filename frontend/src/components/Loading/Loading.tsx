import styles from "./styles/Loading.module.css";
import mapSvg from "../../assets/map.svg";
import "./styles/animations.css";

export default function Loading() {
  return (
    <section className={styles.container}>
      <img className={styles.map} src={mapSvg} alt="map" />
      <div className={styles.glass}>🔍</div>
    </section>
  );
}
