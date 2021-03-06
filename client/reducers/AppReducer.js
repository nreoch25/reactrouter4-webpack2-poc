import { ADD_CONTENT } from "../actions/AppActions";
const initialState = { content: [] };

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}

export default AppReducer;
