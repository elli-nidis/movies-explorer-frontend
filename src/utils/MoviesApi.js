import { handleSendRequest } from "./handleSendRequest";
import { BASE_URL_MOVIES } from "./AdressApiConfig";

export function getMovies() {
  return fetch(BASE_URL_MOVIES, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => handleSendRequest(res));
}
