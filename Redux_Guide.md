# Redux Guide

This README helps you understand the Redux implementation using React-Redux hooks and a custom store setup.

---

## Overview of Redux

Redux is a predictable state container for JavaScript apps. It follows three core principles:

1. **Single Source of Truth**: The entire app state is stored in a single store object.
2. **State is Read-Only**: The only way to change state is by dispatching an action.
3. **Changes are Made with Pure Functions**: Reducers specify how the state changes in response to actions.

**Key Benefits**

- Centralized management of application state.
- Easy to trace and debug state changes.
- Integrates well with TypeScript for strict type safety.

---

## Project File Structure

```text
src/
├── Pages/
│   └── Redux/
│       ├── store.tsx      # Defines initial state, reducer, and creates the Redux store
│       └── ReduxPage.tsx  # Uses useSelector and useDispatch hooks to read and update state
└── interfaces.ts          # Type definitions for ReduxAction and ReduxState
```

---

## Tips and Best Practices

- Keep reducers pure and avoid side effects.
- Use action creators or `createAction` for consistency.
- Incorporate middleware (e.g., Redux Thunk) for async actions.
- Normalize complex state shapes to simplify updates.
- Split reducers with `combineReducers` as your app grows.

---

Happy coding with Redux and React-Redux!
