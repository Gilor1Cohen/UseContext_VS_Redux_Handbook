import { useSelector, useDispatch } from "react-redux";
import type { ReduxAction, ReduxState } from "../interfaces";

import "../Pages.css";

function ReduxPage() {
  // useSelector reads specific slices of the Redux store state.
  // Here, we extract 'name' and 'age' from the store's state object.
  const Name: string = useSelector((state: ReduxState) => state.name);
  const Age: number = useSelector((state: ReduxState) => state.age);

  // useDispatch returns the dispatch function to send actions to the store.
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1>Redux</h1>

      {/* Form to dispatch actions that update the Redux store */}
      <form id="ReduxForm" className="Form">
        {/* Update 'name': dispatches an action on each change */}
        <input
          type="text"
          className="name"
          placeholder="Name"
          onChange={(e) => {
            dispatch<ReduxAction>({
              type: "UpdateName",
              payload: { name: e.target.value },
            });
          }} // Dispatch action to update 'name' in store
        />

        {/* Update 'age': dispatches an action, only if valid number */}
        <input
          type="text"
          className="age"
          placeholder="age"
          onChange={(e) => {
            if (!isNaN(+e.target.value))
              dispatch<ReduxAction>({
                type: "UpdateAge",
                payload: { age: +e.target.value },
              });
          }} // Dispatch action to update 'age' in store
        />
      </form>

      {/* Display current Redux state values */}
      <div className="dataArea">
        <p className="dataArea-p">Name: {Name}</p>
        <p className="dataArea-p">Age: {Age}</p>
      </div>
    </div>
  );
}
export default ReduxPage;
