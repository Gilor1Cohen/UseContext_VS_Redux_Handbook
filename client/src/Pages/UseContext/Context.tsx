import { createContext, useState, type ReactNode } from "react";
import type { UserContext } from "../interfaces";

// Create a Context object with default placeholder values
// This context will hold the current user's name and age, along with setter functions
export const userContext = createContext<UserContext>({
  name: "", // Default name is an empty string
  setName: () => {},
  age: 0, // Default age is zero
  setAge: () => {},
});

// Context provider component.
// This wraps its children component and makes the context values available to them.
// @param children: All nested React elements under this component
function Context({ children }: { children: ReactNode }) {
  // Local state for the user's name, initialized to an empty string
  const [name, setName] = useState<string>("");

  // Local state for the user's age, initialized to zero
  const [age, setAge] = useState<number>(0);

  // Provide the current state values and updater functions to all descendants
  return (
    <userContext.Provider value={{ name, setName, age, setAge }}>
      {children} {/* Render children within the context provider */}
    </userContext.Provider>
  );
}

export default Context;
