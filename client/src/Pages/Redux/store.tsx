import { createStore } from "redux";
import type { ReduxAction, ReduxState } from "../interfaces";

// Define the initial state shape for user data in Redux
const initialState: ReduxState = {
  name: "", // Default name (empty string)
  age: 0, // Default age (0)
};

export function userState(
  state: ReduxState = initialState,
  action: ReduxAction
): ReduxState {
  switch (action.type) {
    case "UpdateName":
      // If payload has a defined 'name', update it; otherwise return current state
      return action.payload?.name !== undefined
        ? { ...state, name: action.payload.name }
        : state;

    case "UpdateAge":
      // If payload has a defined 'age', update it; otherwise return current state
      return action.payload?.age !== undefined
        ? { ...state, age: action.payload.age }
        : state;

    default:
      // For any other actions, return the unchanged state
      return state;
  }
}

// Create the Redux store using the userState reducer
const UserStore = createStore(userState);

export default UserStore;
