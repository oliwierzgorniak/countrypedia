import styles from "./List.module.css";
import enterSvg from "../../assets/enter.svg";
import { useNavigate } from "react-router-dom";
import { SELECTED_LIST_ELEMENT_COLOR } from "../../consts";

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
          style={{
            background:
              selectedElement === i ? SELECTED_LIST_ELEMENT_COLOR : "unset",
          }}
        >
          <div className={styles.listContainer}>
            <span className={styles.flag}>{flag}</span> {name}
          </div>
          {selectedElement === i && (
            <img
              src={enterSvg}
              className={styles.enter}
              alt="enter"
              width="24"
              height="24"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
