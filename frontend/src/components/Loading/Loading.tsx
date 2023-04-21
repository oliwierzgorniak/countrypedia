import styles from "./styles/Loading.module.css";
import mapSvg from "../../assets/map.svg";
import { CSSTransition } from "react-transition-group";
import "./styles/animations.css";

type Props = {
  isLoading: boolean;
};

export default function Loading({ isLoading }: Props) {
  return (
    <CSSTransition
      in={isLoading}
      timeout={400}
      classNames="animation"
      unmountOnExit
      appear
    >
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
    </CSSTransition>
  );
}
