export default function getApiUrl(name: string) {
  const url = process.env.API_URL;
  const param = process.env.API_PARAM;

  if (typeof url !== "string" || typeof param !== "string") {
    throw new Error(".env variables not available");
  }

  return `${process.env.API_URL}${name}${process.env.API_PARAM}`;
}
