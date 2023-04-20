import { useNavigate } from "react-router-dom";
import styles from "./Back.module.css";
import arrowSvg from "../../assets/arrow.svg";

type BackProps = {
  customStyle?: CSSModuleClasses[string];
};

export default function Back({ customStyle }: BackProps) {
  const navigate = useNavigate();

  return (
    <button
      className={customStyle ? customStyle : styles.button}
      onClick={() => navigate("/")}
    >
      <img src={arrowSvg} width="22" height="16" /> go back
    </button>
  );
}
