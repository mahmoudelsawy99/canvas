import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editor",
  initialState: {
    selectedImageUrl: null, // Selected image URL
    canvasObjects: [], // Array of objects on the canvas
    backgroundColor: "#ffffff", // Canvas background color
    canvasWidth: 800, // Canvas width
    canvasHeight: 600, // Canvas height
    activeObject: null, // Currently selected object on the canvas
  },
  reducers: {
    // Set the selected image URL
    setSelectedImage: (state, action) => {
      state.selectedImageUrl = action.payload;
    },

    // Add an object to the canvas
    addCanvasObject: (state, action) => {
      state.canvasObjects.push(action.payload);
    },

    // Add a text object to the canvas
    addTextObject: (state, action) => {
      const { text, fontSize, fontWeight, left, top } = action.payload;
      const textObject = {
        type: "text",
        text,
        fontSize,
        fontWeight,
        left,
        top,
        id: Date.now(), // Unique ID for the object
      };
      state.canvasObjects.push(textObject);
    },

    // Remove an object from the canvas
    removeCanvasObject: (state, action) => {
      state.canvasObjects = state.canvasObjects.filter(
        (obj) => obj.id !== action.payload
      );
    },

    // Update the canvas background color
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },

    // Update canvas dimensions
    setCanvasDimensions: (state, action) => {
      state.canvasWidth = action.payload.width;
      state.canvasHeight = action.payload.height;
    },

    // Set the active object (currently selected object)
    setActiveObject: (state, action) => {
      state.activeObject = action.payload;
    },

    // Clear the entire canvas
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
