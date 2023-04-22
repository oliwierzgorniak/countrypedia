import { API_URL, API_PARAM } from "../consts";

export default function getApiUrl(name: string) {
  return `${API_URL}${name}${API_PARAM}`;
}
