import { useContext } from "react";
import { userContext } from "./Context";

import "../Pages.css";

function UseContextPage() {
  const { name, age, setName, setAge } = useContext(userContext);

  return (
    <div className="page">
      <h1>UseContext</h1>
      <form id="UseContextForm" className="Form">
        <input
          type="text"
          className="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="age"
          placeholder="age"
          onChange={(e) => setAge(+e.target.value)}
        />
      </form>

      <div className="dataArea">
        <p className="dataArea-p">Name: {name}</p>
        <p className="dataArea-p">Age: {age}</p>
      </div>
    </div>
  );
}

export default UseContextPage;
