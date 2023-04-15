export default function getParsedData(data: any) {
  const obj = data[0];
  const language = Object.values(obj.languages)[0];
  // @ts-ignore
  const currency = Object.values(obj.currencies)[0].name;

  return {
    Geography: {
      Capital: obj.capital[0],
      Region: obj.region,
      Area: obj.area,
    },
    People: {
      Language: language,
      Population: obj.population,
      Gini: obj.gini,
    },
    Other: {
      TLD: obj.tld[0],
      "Driving side": obj.car.side,
      Currency: currency,
    },
  };
}
