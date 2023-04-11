import magnifyingGlassSvg from "../../assets/magnifyingGlass.svg";

import styles from "./Search.module.css";
import { useState } from "react";
import getNewShownCountries from "./func/getNewShownCountires";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [shownCountries, setShownCountries] = useState<Country[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img
          src={magnifyingGlassSvg}
          alt="magnifying glass"
          className={styles.icon}
        />
        <input
          value={searchInput}
          onChange={(e) => {
            const input = e.currentTarget.value;
            setSearchInput(input);
            const newShownCountires = getNewShownCountries(input);
            setShownCountries(newShownCountires);
          }}
          placeholder="country..."
          className={styles.input}
        />
      </div>
      <ul className={styles.list}>
        {shownCountries.map(({ name, flag }) => (
          <li key={flag}>
            <span className={styles.flag}>{flag}</span> {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
