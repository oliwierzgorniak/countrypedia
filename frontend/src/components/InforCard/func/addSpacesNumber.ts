export default function addSpacesNumber(value: number | string | undefined) {
  if (typeof value !== "number") return value;

  const numberString = String(value);
  let numberToReturn = "";

  let i = numberString.length;
  while (true) {
    if (i < 3) {
      numberToReturn = numberString.substring(0, i) + " " + numberToReturn;
      break;
    }
    numberToReturn = numberString.substring(i - 3, i) + " " + numberToReturn;
    i -= 3;
  }

  return numberToReturn;
}
