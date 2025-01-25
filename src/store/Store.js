import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";
import editorSlice from "./Slices/editorSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";
import { loadStateFromLocalStorage } from "./Slices/editorSlice";

const preloadedState = loadStateFromLocalStorage();

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
