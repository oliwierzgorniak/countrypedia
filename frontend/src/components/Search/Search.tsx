import magnifyingGlassSvg from "../../assets/magnifyingGlass.svg";
import countries from "../../assets/countryNames.json";

import styles from "./Search.module.css";
import { FormEvent, useState } from "react";
import getNewShownCountries from "./func/getNewShownCountires";

function onChange(e: FormEvent) {
  if (!e.target) {
    console.error("e.target is null");
    return;
  }
  const input = e.target.value;
}

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [shownCountries, setShownCountries] = useState<string[]>([]);

  return (
    <div>
      <div className={styles.container}>
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
            console.log(newShownCountires);
            setShownCountries(newShownCountires);
          }}
          placeholder="country..."
          className={styles.input}
        />
      </div>
      <ul>
        {shownCountries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}
