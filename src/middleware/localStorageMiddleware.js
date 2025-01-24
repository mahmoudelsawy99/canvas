import { debounce } from "lodash";

const saveState = debounce((state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("editorState", serializedState);
  } catch (err) {
    console.error("Could not save state to local storage", err);
  }
}, 500);

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  const stateToSave = {
    editor: {
      selectedImageUrl: state.editor.selectedImageUrl,
      canvasObjects: state.editor.canvasObjects,
      backgroundColor: state.editor.backgroundColor,
      canvasWidth: state.editor.canvasWidth,
      canvasHeight: state.editor.canvasHeight,
      activeObject: state.editor.activeObject,
      savedCanvasState: state.editor.savedCanvasState,
    },
  };

  saveState(stateToSave);
  return result;
};

export default localStorageMiddleware;
