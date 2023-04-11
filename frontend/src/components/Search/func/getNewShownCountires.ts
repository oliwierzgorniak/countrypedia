import countryNames from "../../../assets/countryNames.json";

export default function getNewShownCountries(input: string): string[] {
  if (input.length === 0) return [];

  const inputLower = input.toLocaleLowerCase();
  const filteredCountries = countryNames.filter((country) => {
    const countryLower = country.toLocaleLowerCase();
    return countryLower.startsWith(inputLower);
  });
  return filteredCountries;
}
