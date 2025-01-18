import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editor",
  initialState: {
    selectedImageUrl: null,
    canvasObjects: [],
    backgroundColor: "#ffffff",
    canvasWidth: window.innerWidth - 200,
    canvasHeight: 200,
    activeObject: null,
  },
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImageUrl = action.payload;
    },

    addCanvasObject: (state, action) => {
      state.canvasObjects.push(action.payload);
    },

    addTextObject: (state, action) => {
      const { text, fontSize, fontWeight, left, top } = action.payload;
      const textObject = {
        type: "text",
        text,
        fontSize,
        fontWeight,
        left,
        top,
        id: Date.now(),
      };
      state.canvasObjects.push(textObject);
    },

    removeCanvasObject: (state, action) => {
      state.canvasObjects = state.canvasObjects.filter(
        (obj) => obj.id !== action.payload
      );
    },

    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },

    setCanvasDimensions: (state, action) => {
      state.canvasWidth = action.payload.width;
      state.canvasHeight = action.payload.height;
    },

    setActiveObject: (state, action) => {
      state.activeObject = action.payload;
    },

    clearCanvas: (state) => {
      state.selectedImageUrl = null;
      state.canvasObjects = [];
      state.backgroundColor = "#ffffff";
      state.activeObject = null;
    },
  },
});

export const {
  setSelectedImage,
  addCanvasObject,
  addTextObject,
  removeCanvasObject,
  setBackgroundColor,
  setCanvasDimensions,
  setActiveObject,
  clearCanvas,
} = editorSlice.actions;

export default editorSlice.reducer;
