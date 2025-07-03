import { useContext } from "react";
import { userContext } from "./Context";

import "../Pages.css";

function UseContextPage() {
  // Destructure context values and updater functions
  // Here, we destructure that returned object into individual variables:
  // - name: the current user's name string
  // - age: the current user's age number
  // - setName: function to update the name
  // - setAge: function to update the age
  // useContext(userContext):
  // - The useContext hook subscribes this component to the userContext.
  // - It takes the context object (userContext) created by createContext.
  // - React finds the nearest matching Provider above this component and returns its value.
  // - Any update to the provider's `value` will cause this component to re-render with the new data.
  const { name, age, setName, setAge } = useContext(userContext);

  return (
    <div className="page">
      <h1>UseContext</h1>

      {/* Form to update user data in context */}
      <form id="UseContextForm" className="Form">
        <input
          type="text"
          className="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)} // Update name directly
        />
        <input
          type="number"
          className="age"
          placeholder="age"
          onChange={(e) => setAge(+e.target.value)} // Update age directly, convert to number
        />
      </form>

      {/* Display current context values */}
      <div className="dataArea">
        <p className="dataArea-p">Name: {name}</p>
        <p className="dataArea-p">Age: {age}</p>
      </div>
    </div>
  );
}

export default UseContextPage;
