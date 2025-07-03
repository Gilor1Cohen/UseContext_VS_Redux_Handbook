import { createStore } from "redux";
import type { ReduxAction, ReduxState } from "../interfaces";

const initialState: ReduxState = {
  name: "",
  age: 0,
};

export function userState(
  state: ReduxState = initialState,
  action: ReduxAction
): ReduxState {
  switch (action.type) {
    case "UpdateName":
      return action.payload?.name !== undefined
        ? { ...state, name: action.payload.name }
        : state;

    case "UpdateAge":
      return action.payload?.age !== undefined
        ? { ...state, age: action.payload.age }
        : state;

    default:
      return state;
  }
}

const UserStore = createStore(userState);
export default UserStore;
