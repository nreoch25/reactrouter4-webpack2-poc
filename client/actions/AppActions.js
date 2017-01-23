import callApi from "../utils/apiCaller";

const CONTENT_URL = "https://api-gw-dev.radio-canada.ca/aggregate-content/v1/items?pageSize=20&page=1&categoryIds=";
const DETAIL_URL = "http://www.cbc.ca/json/cmlink/";

// Export Constants
export const ADD_CONTENT = "ADD_CONTENT";

export function addContent(content) {
  return {
    type: ADD_CONTENT,
    payload: content
  };
}

function getCategory(category) {
  switch(category) {
    case "arts":
      return "21";
    case "news":
      return "20";
    case "sports":
      return "19";
  }
}

export function fetchContent(category) {
  let catID = getCategory(category);
  let url = `${CONTENT_URL}${catID}`
  return (dispatch) => {
    return callApi(url, "get").then(res => {
      dispatch(addContent(res));
    });
  };
}

export function fetchDetail(sourceID) {
  let url = `${DETAIL_URL}${sourceID}`;
  return ( dispatch ) => {
    return callApi(url, "get").then(res => {
      console.log("DETAIL RESPONSE", res);
    });
  };
}
