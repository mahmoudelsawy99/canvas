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

    updateShapeProperties: (state, action) => {
      const { id, left, top, width, height, fill, stroke, strokeWidth } =
        action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "shape") {
        if (left !== undefined) object.left = left;
        if (top !== undefined) object.top = top;
        if (width !== undefined) object.width = width;
        if (height !== undefined) object.height = height;
        if (fill !== undefined) object.fill = fill;
        if (stroke !== undefined) object.stroke = stroke;
        if (strokeWidth !== undefined) object.strokeWidth = strokeWidth;
      }
    },

    ///88
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
        object.fontStyle = fontStyle;
      }
    },
    updateTextUnderline: (state, action) => {
      const { id, underline } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.underline = underline;
      }
    },
    updateTextAlign: (state, action) => {
      const { id, textAlign } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.textAlign = textAlign;
      }
    },
    updateTextColor: (state, action) => {
      const { id, color } = action.payload;
      const object = state.canvasObjects.find((obj) => obj.id === id);
      if (object && object.type === "text") {
        object.color = color;
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
} = editorSlice.actions;

export default editorSlice.reducer;
