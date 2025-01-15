import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarVisible: true,
  activePanel: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
      state.activePanel = null;
    },
    setActivePanel: (state, action) => {
      state.activePanel =
        state.activePanel === action.payload ? null : action.payload;
      state.isSidebarVisible = !state.isSidebarVisible;
    },
  },
});

export const { toggleSidebar, setActivePanel } = sidebarSlice.actions;
export default sidebarSlice.reducer;
