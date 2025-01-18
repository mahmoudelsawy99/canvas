import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Slices/sidebarSlice";
import editorSlice from "./Slices/editorSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    editor: editorSlice,
  },
});

export default store;
