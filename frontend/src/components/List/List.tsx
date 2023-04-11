import styles from "./List.module.css";
import enterSvg from "../../assets/enter.svg";
import { useNavigate } from "react-router-dom";

type ListProps = {
  shownCountries: Country[];
  selectedElement: number | null;
};

export default function List({ shownCountries, selectedElement }: ListProps) {
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      {shownCountries.map(({ name, flag }, i) => (
        <li
          data-name={name}
          onClick={() => {
            navigate(`/country/${name}`);
          }}
          key={flag}
          style={{ background: selectedElement === i ? "#bbb" : "unset" }}
        >
          <span>
            <span className={styles.flag}>{flag}</span> {name}
          </span>
          {selectedElement === i && (
            <img src={enterSvg} className={styles.enter} alt="enter" />
          )}
        </li>
      ))}
    </ul>
  );
}
