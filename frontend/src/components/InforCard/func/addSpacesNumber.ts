export default function addSpacesNumber(value: number | string | undefined) {
  if (typeof value !== "number") return value;

  const numberString = String(value);

  let i = numberString.length;
  let numberToReturn = numberString.substring(i - 3, i);
  i -= 3;

  if (i > 0) {
    while (true) {
      numberToReturn = numberString.substring(i - 3, i) + " " + numberToReturn;
      i -= 3;
      if (i <= 0) break;
    }
  }

  return numberToReturn;
}
