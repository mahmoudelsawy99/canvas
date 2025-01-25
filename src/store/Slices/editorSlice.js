import { createSlice } from "@reduxjs/toolkit";

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("editorState");
    if (serializedState === null) {
      return undefined;
    }
    console.log(JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from local storage", err);
    return undefined;
  }
};

const defaultInitialState = {
  selectedImageUrl: null,
  canvasObjects: [],
  backgroundColor: "#ffffff",
  canvasWidth: window.innerWidth - 200,
  canvasHeight: 200,
  activeObject: null,
  savedCanvasState: null,
};

const initialState = loadStateFromLocalStorage() || defaultInitialState;

console.log(initialState);
const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setSelectedImage: (state, action) => {
      state.selectedImageUrl = action.payload;
    },

    addCanvasObject: (state, action) => {
      state.canvasObjects.push(action.payload);
    },

    addTextObject: (state, action) => {
      const { text, fontSize, fontWeight, left, top, fill } = action.payload;
      const textObject = {
        type: "text",
        text,
        fontSize,
        fontWeight,
        left,
        top,
        fill: fill || "#000000",
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

    addShapeObject: (state, action) => {
      const { type, left, top, width, height, fill, stroke, strokeWidth } =
        action.payload;
      const shapeObject = {
        type: "shape",
        shapeType: type,
        left,
        top,
        width,
        height,
        fill,
        stroke,
        strokeWidth,
        id: Date.now(),
      };
      state.canvasObjects.push(shapeObject);
    },

    updateTextFontSize: (state, action) => {
      const { id, fontSize } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.fontSize = fontSize;
      }
    },
    updateTextFontWeight: (state, action) => {
      const { id, fontWeight } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.fontWeight = fontWeight;
      }
    },
    updateTextFontStyle: (state, action) => {
      const { id, fontStyle } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        console.log(action.payload);
        object.fontStyle = fontStyle;
      }
    },
    updateTextUnderline: (state, action) => {
      const { id, underline } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        console.log(action.payload);
        object.underline = underline;
      }
    },
    updateTextAlign: (state, action) => {
      const { id, textAlign } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        console.log(action.payload);
        object.textAlign = textAlign;
      }
    },
    updateTextColor: (state, action) => {
      const { id, fill } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        console.log(object.left, object.top);
        object.fill = fill;
      }
    },
    updateTextFontFamily: (state, action) => {
      const { id, fontFamily } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.fontFamily = fontFamily;
      }
    },
    saveCanvasState: (state) => {
      const canvasObjects = state.canvasObjects.map((obj) => {
        if (obj.type === "text") {
          return {
            type: "text",
            text: obj.text,
            fontSize: obj.fontSize,
            fontFamily: obj.fontFamily,
            fill: obj.fill,
            left: obj.left,
            top: obj.top,
            fontWeight: obj.fontWeight,
            fontStyle: obj.fontStyle,
            underline: obj.underline,
            textAlign: obj.textAlign,
            id: obj.id, // Ensure the ID is saved
          };
        }
        return obj;
      });

      const stateToSave = {
        selectedImageUrl: state.selectedImageUrl,
        canvasObjects,
        backgroundColor: state.backgroundColor,
        canvasWidth: state.canvasWidth,
        canvasHeight: state.canvasHeight,
        activeObject: state.activeObject,
      };

      localStorage.setItem("editorState", JSON.stringify(stateToSave));
    },
    updateCanvasPosition: (state, action) => {
      const { id, top, left } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        console.log(top, left);
        object.top = top;
        object.left = left;
      }
    },
    deleteCanvasObject: (state, action) => {
      const { id } = action.payload;
      state.canvasObjects = state.canvasObjects.filter((obj) => obj.id !== id);
    },
    updateTextContent: (state, action) => {
      const { id, text } = action.payload;
      const objectIndex = state.canvasObjects.findIndex((obj) => obj.id === id);
      if (objectIndex !== -1) {
        state.canvasObjects[objectIndex].text = text;
      }
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
  addShapeObject,
  updateShapeProperties,
  updateTextFontSize,
  updateTextFontWeight,
  updateTextFontStyle,
  updateTextUnderline,
  updateTextAlign,
  updateTextColor,
  updateTextFontFamily,
  saveCanvasState,
  updateCanvasPosition,
  deleteCanvasObject,
  updateTextContent,
} = editorSlice.actions;

export default editorSlice.reducer;

// stable
