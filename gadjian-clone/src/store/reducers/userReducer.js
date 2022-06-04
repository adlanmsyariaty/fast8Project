import { FETCH_USER_DATA, PAGE_NUMBER } from "../actions/actionType";

const initialState = {
  users: [],
  page: 1
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case PAGE_NUMBER:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
