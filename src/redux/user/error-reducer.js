import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserActionTypes.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
