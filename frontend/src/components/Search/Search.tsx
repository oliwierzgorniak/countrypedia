import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getNewShownCountries from "./func/getNewShownCountires";
import handleEnter from "./func/handleEnter";
import handleArrowsAndGetIndex from "./func/handleArrowsAngGetIndex";
import { NUMBER_OF_LIST_ELEMENTS } from "../../consts";
import List from "../List/List";
import magnifyingGlassSvg from "../../assets/magnifyingGlass.svg";
import styles from "./Search.module.css";

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [shownCountries, setShownCountries] = useState<Country[]>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div
      onKeyDown={(e) => {
        handleEnter(e.code, selectedElement, shownCountries, navigate);
        const index = handleArrowsAndGetIndex(e.code, selectedElement);

        if (typeof index !== "undefined")
          setSelectedElement(index % NUMBER_OF_LIST_ELEMENTS);
      }}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <img
          src={magnifyingGlassSvg}
          alt="magnifying glass"
          className={styles.icon}
          width="21"
          height="21"
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
