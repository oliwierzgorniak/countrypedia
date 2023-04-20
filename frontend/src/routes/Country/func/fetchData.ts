import { SERVER_URL } from "../../../consts";

type setDataType = React.Dispatch<React.SetStateAction<null>>;
type setIsLoadingType = React.Dispatch<React.SetStateAction<boolean>>;
type setErrorType = React.Dispatch<React.SetStateAction<null | HTTPError>>;

export default async function fetchData(
  country: string | undefined,
  setData: setDataType,
  setIsLoading: setIsLoadingType,
  setError: setErrorType
) {
  const req = await fetch(SERVER_URL + country);
  if (req.ok) {
    const json = await req.json();
    setData(json);
    setIsLoading(false);
  } else {
    const message = await req.text();
    setError({ message: message, code: req.status });
    setIsLoading(false);
  }
}
