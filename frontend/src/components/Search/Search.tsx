import magnifyingGlassSvg from "../../assets/magnifyingGlass.svg";
import countries from "../../assets/countryNames.json";

import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.container}>
      <img
        src={magnifyingGlassSvg}
        alt="magnifying glass"
        className={styles.icon}
      />
      <input
        list="countries"
        placeholder="country..."
        className={styles.input}
      />
      <datalist id="countries">
        {countries.map((country) => (
          <option value={country} />
        ))}
      </datalist>
    </div>
  );
}
