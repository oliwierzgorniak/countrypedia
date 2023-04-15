import { useNavigate } from "react-router-dom";
import styles from "./Back.module.css";
import arrowSvg from "../../assets/arrow.svg";

export default function Back() {
  const navigate = useNavigate();

  return (
    <button className={styles.button} onClick={() => navigate("/")}>
      <img src={arrowSvg}></img> go back
    </button>
  );
}
