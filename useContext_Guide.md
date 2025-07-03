# useContext Guide

This README helps you understand and study the custom React Context implementation using the `useContext` hook.

---

## Overview of React Context

React Context allows sharing values (state, functions) across components without "prop drilling." It involves:

1. **Context Object**: Created by `createContext` with default values.
2. **Provider Component**: Wraps part of the component tree and supplies actual context values.

**Key Benefits**

- Avoids passing props through many levels
- Simplifies global or app-level state management
- Integrates with TypeScript for type safety

---

## Project File Structure

```text
src/
├── Pages/
│   └── UseContext/
│       ├── Context.tsx        # Defines `userContext` and Provider component
│       └── UseContextPage.tsx # Consumes context via `useContext`
└── interfaces.ts              # Type definitions for UserContext
```

---

## Understanding `useContext`

- **Syntax**: `const value = useContext(ContextObject)`
- **Behavior**:
  1. Locates the nearest `<ContextObject.Provider>` in the tree.
  2. Returns its `value` prop.
  3. Subscribes the component: it re-renders when the provider’s value changes.

**Use Cases**

- Global themes (dark/light mode)
- Authentication or user settings
- Language or locale preferences
- Avoid for highly dynamic or performance-critical updates

---

## Tips for Beginners

- Define a clear context interface in TypeScript before implementation.
- Keep the provider focused on state logic and avoid mixing concerns.
- Name your context and provider components clearly (e.g., `UserContext` / `UserProvider`).
- Use separate contexts for unrelated data (e.g., `AuthContext` vs `ThemeContext`).
- Minimize context updates: frequent changes can lead to unnecessary re-renders.

---

Happy coding with React Context and `useContext`!
