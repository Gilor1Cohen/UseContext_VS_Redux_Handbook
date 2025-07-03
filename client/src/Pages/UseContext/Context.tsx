import { createContext, useState, type ReactNode } from "react";
import type { UserContext } from "../interfaces";

export const userContext = createContext<UserContext>({
  name: "",
  setName: () => {},
  age: 0,
  setAge: () => {},
});

function Context({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  return (
    <userContext.Provider value={{ name, setName, age, setAge }}>
      {children}
    </userContext.Provider>
  );
}

export default Context;
