import { NavigateFunction } from "react-router-dom";

export default function handleEnter(
  keyCode: string,
  selectedElement: number | null,
  shownCountries: Country[],
  navigate: NavigateFunction
) {
  if (keyCode === "Enter") {
    if (selectedElement !== null)
      navigate(`/country/${shownCountries[selectedElement].name}`);
  }
}
