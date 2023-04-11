import magnifyingGlassSvg from "../../assets/magnifyingGlass.svg";
import styles from "./Search.module.css";
import { useState } from "react";
import getNewShownCountries from "./func/getNewShownCountires";
import List from "../List/List";
import { N_LIST_ELEMENTS } from "../../consts";
import { useNavigate } from "react-router-dom";
import handleEnter from "./func/handleEnter";
import handleArrowsAndGetIndex from "./func/handleArrowsAngGetIndex";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [shownCountries, setShownCountries] = useState<Country[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div
      onKeyDown={(e) => {
        handleEnter(e.code, selectedElement, shownCountries, navigate);
        const index = handleArrowsAndGetIndex(e.code, selectedElement);

        if (typeof index !== "undefined")
          setSelectedElement(index % N_LIST_ELEMENTS);
      }}
      className={styles.container}
    >
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
      <List shownCountries={shownCountries} selectedElement={selectedElement} />
    </div>
  );
}
