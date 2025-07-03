export interface UserContext {
  name: string;
  setName: (name: string) => void;
  age: number;
  setAge: (age: number) => void;
}

export interface ReduxAction {
  type: "UpdateName" | "UpdateAge";
  payload?: {
    name?: string;
    age?: number;
  };
  [key: string]: any;
}

export interface ReduxState {
  name: string;
  age: number;
}
