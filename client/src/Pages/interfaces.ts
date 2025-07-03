export interface UserContext {
  name: string;
  setName: (name: string) => void;
  age: number;
  setAge: (age: number) => void;
}

export interface ReduxState {
  name: string;
  age: number;
}

export interface ReduxAction {
  type: "UpdateName" | "UpdateAge";
  payload?: {
    name?: string;
    age?: number;
  };

  ///////////
  // Index signature allows the action object to include additional properties.
  // For example, middleware or logging tools can add metadata fields without
  // causing TypeScript errors. Use sparingly to avoid untyped data.
  [key: string]: any;
}
