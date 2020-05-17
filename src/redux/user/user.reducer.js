import { UserActionTypes } from "./user.types";

// const INITIAL_STATE = {
//   currentUser: null
// };

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.payload
//       };
//     default:
//       return state;
//   }
// };
const isEmpty = require("is-empty");
const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: {},
  loading: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log(action.payload);

      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        currentUser: action.payload,
      };
    case UserActionTypes.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
