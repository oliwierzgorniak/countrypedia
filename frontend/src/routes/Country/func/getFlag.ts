import countries from "../../../assets/countries.json";

export default function getFlag(countryName: string) {
  return countries.find(({ name }) => name === countryName)?.flag;
}
