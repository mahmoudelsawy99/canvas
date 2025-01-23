import TextEditorToolbar from "../components/TextEditor/TextEditorbar";
import IconSidebar from "../components/Sidebar/IconSidebar";
import ImageEditor from "../components/Editor/ImageEditor";
import Navbar from "../components/Navbar/Navbar";

import { useEffect, useRef, useState, useMemo } from "react";
import { fabric } from "fabric";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveObject,
  updateCanvasPosition,
} from "../store/Slices/editorSlice";
import { createShape } from "../components/Editor/utils";

const Editor = () => {
  const dispatch = useDispatch();
  const {
    selectedImageUrl,
    canvasObjects,
    backgroundColor,
    canvasWidth,
    canvasHeight,
    activeObject,
  } = useSelector((state) => state.editor);
  const { activePanel } = useSelector((state) => state.sidebar);

  const canvasRef = useRef(null);
  const canvasInstanceRef = useRef(null);
  const imageRef = useRef(null);
  const selectedObjectRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);

  const canvasDimensions = useMemo(() => {
    // const activepanelWidth = window.innerWidth - 500;
    return {
      // width: activePanel ? activepanelWidth : canvasWidth,
      width: canvasWidth || 1000,
      height: canvasHeight || 200,
    };
  }, [activePanel, canvasWidth, canvasHeight]);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: canvasDimensions.width,
      height: canvasDimensions.height,
      backgroundColor: backgroundColor || "#fff",
      selection: true,
      evented: true,
      selectionFullyContained: true,
    });

    canvas.selection = true;
    canvasInstanceRef.current = canvas;

    canvas.on("selection:created", (e) => {
      const selected = e.selected[0];
      if (selected.id !== selectedObject?.id) {
        selectedObjectRef.current = selected;
        const newSelectedObject = { id: selected.id, type: "text" };
        setSelectedObject(newSelectedObject);
        dispatch(setActiveObject(newSelectedObject));
        selected.bringToFront();
      }
      selected.sendToBack();
    });

    canvas.on("selection:updated", (e) => {
      const selected = e.selected[0];
      if (selected.id !== selectedObject?.id) {
        selectedObjectRef.current = selected;
        const newSelectedObject = { id: selected.id, type: "text" };
        setSelectedObject(newSelectedObject);
        dispatch(setActiveObject(newSelectedObject));
        selected.bringToFront();
      }
      selected.sendToBack();
    });

    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const debouncedDispatch = debounce((movedObject) => {
      dispatch(
        updateCanvasPosition({
          id: movedObject.id,
          top: movedObject.top,
          left: movedObject.left,
        })
      );
    }, 100);

    canvas.on("object:moving", (e) => {
      const movedObject = e.target;

      if (movedObject.type === "textbox" || movedObject.type === "shape") {
        debouncedDispatch(movedObject);
        console.log(movedObject.id);
      }
    });

    // canvas.on("selection:cleared", () => {
    //   selectedObjectRef.current = null;
    //   setSelectedObject(null);
    //   dispatch(setActiveObject(null));
    // });

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasInstanceRef.current;
    if (!canvas) return;

    canvas.setBackgroundColor(backgroundColor || "#fff", () => {
      if (imageRef.current) {
        imageRef.current.bringToFront();
        canvas.renderAll();
      }
    });
  }, [backgroundColor]);

  useEffect(() => {
    const canvas = canvasInstanceRef.current;
    if (!canvas) return;

    canvas.setDimensions({
      width: canvasDimensions.width,
      height: canvasDimensions.height,
    });

    canvas.renderAll();
  }, [canvasDimensions]);

  useEffect(() => {
    const canvas = canvasInstanceRef.current;
    if (!canvas || !selectedImageUrl) return;

    fabric.Image.fromURL(selectedImageUrl, (img) => {
      if (!img) {
        console.error("Image failed to load.");
        return;
      }

      const scale = canvasDimensions.height / img.height;
      const left = (canvasDimensions.width - img.width * scale) / 2;

      img.set({
        left: left,
        top: 0,
        scaleX: scale,
        scaleY: scale,
        selectable: true,
        evented: true,
        lockScalingY: true,
        lockMovementX: true,
        lockMovementY: true,
      });

      if (imageRef.current) {
        canvas.remove(imageRef.current);
      }

      canvas.add(img);
      imageRef.current = img;
      imageRef.current.sendToBack();

      canvas.renderAll();
    });
  }, [selectedImageUrl, canvasDimensions]);

  useEffect(() => {
    const canvas = canvasInstanceRef.current;
    if (!canvas || !imageRef.current) return;

    const imageCenterX =
      imageRef.current.left +
      (imageRef.current.width * imageRef.current.scaleX) / 2;
    const imageCenterY =
      imageRef.current.top +
      (imageRef.current.height * imageRef.current.scaleY) / 2;

    canvas.getObjects().forEach((obj) => {
      if (obj !== imageRef.current) {
        canvas.remove(obj);
      }
    });

    canvasObjects.forEach((obj) => {
      const existingObject = canvas.getObjects().find((o) => o.id === obj.id);
      if (obj.type === "text") {
        const text = new fabric.Textbox(obj.text, {
          left: obj.left || imageCenterX,
          top: obj.top || imageCenterY,
          fontSize: obj.fontSize || 20,
          fontWeight: obj.fontWeight || "normal",
          fontFamily: obj.fontFamily || "Arial",
          fill: obj.fill || "#000000",
          selectable: true,
          originX: "center",
          originY: "center",
          evented: true,
          id: obj.id,
          fontStyle: obj.fontStyle || "normal",
          underline: obj.underline || false,
          textAlign: obj.textAlign || "center",
          width: obj.width || 120,
        });
        canvas.add(text);
        text.bringToFront();
      } else if (obj.type === "shape") {
        const shape = createShape(obj, imageCenterX, imageCenterY);
        if (shape) {
          canvas.add(shape);
          shape.bringToFront();
        }
      }
    });
    imageRef.current.sendToBack();
    canvas.renderAll();
  }, [canvasObjects]);

  return (
    <div className="h-screen w-screen">
      <Navbar canvasInstanceRef={canvasInstanceRef} />
      <IconSidebar />
      <TextEditorToolbar />
      <ImageEditor canvasRef={canvasRef} />
    </div>
  );
};

export default Editor;
