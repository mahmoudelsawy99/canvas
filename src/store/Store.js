import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";
import editorSlice from "./Slices/editorSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("editorState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    editor: editorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});

export default store;
