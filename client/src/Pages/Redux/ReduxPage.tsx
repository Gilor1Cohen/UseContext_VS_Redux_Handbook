import { useSelector, useDispatch } from "react-redux";
import type { ReduxAction, ReduxState } from "../interfaces";

import "../Pages.css";

function ReduxPage() {
  const Name: string = useSelector((state: ReduxState) => state.name);
  const Age: number = useSelector((state: ReduxState) => state.age);

  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1>Redux</h1>
      <form id="ReduxForm" className="Form">
        <input
          type="text"
          className="name"
          placeholder="Name"
          onChange={(e) => {
            dispatch<ReduxAction>({
              type: "UpdateName",
              payload: { name: e.target.value },
            });
          }}
        />
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
          }}
        />
      </form>

      <div className="dataArea">
        <p className="dataArea-p">Name: {Name}</p>
        <p className="dataArea-p">Age: {Age}</p>
      </div>
    </div>
  );
}
export default ReduxPage;
