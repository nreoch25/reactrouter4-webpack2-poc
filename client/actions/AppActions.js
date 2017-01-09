import callApi from "../utils/apiCaller";

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
  return (dispatch) => {
    return callApi(catID, "get").then(res => {
      console.log(res);
      dispatch(addContent(res));
    });
  };
}
