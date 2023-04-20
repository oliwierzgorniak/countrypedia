import countries from "../../../assets/countries.json";
import { NUMBER_OF_LIST_ELEMENTS } from "../../../consts";

export default function getNewShownCountries(input: string): Country[] {
  if (input.length === 0) return [];

  const inputLower = input.toLocaleLowerCase();
  const filteredCountries = countries.filter(({ name, flag }) => {
    const nameLower = name.toLocaleLowerCase();

    if (nameLower.startsWith(inputLower)) {
      return { name, flag };
    }
  });

  return filteredCountries.slice(0, NUMBER_OF_LIST_ELEMENTS);
}
