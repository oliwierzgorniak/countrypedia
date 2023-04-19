type Country = {
  name: string;
  flag: string;
};

type CardTitle = {
  text: string;
  emoji: string;
};

type CardData = {
  Geography: {
    Capital: string | undefined;
    Region: string | undefined;
    Area: number | undefined;
  };
  People: {
    Language: string | undefined;
    Population: number | undefined;
  };
  Other: {
    TLD: string | undefined;
    "Driving side": string | undefined;
    Currency: string | undefined;
  };
};

type HTTPError = {
  message: string;
  code: number;
};
