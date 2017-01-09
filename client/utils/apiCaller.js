import fetch from "isomorphic-fetch";
const API_URL = "https://api-gw-dev.radio-canada.ca/aggregate-content/v1/items?pageSize=20&page=1&categoryIds=";

export default function callApi(category, method) {
  return fetch(`${API_URL}${category}`, {
    headers: { "content-type": "application/json" },
    method: method
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error
  );
}
