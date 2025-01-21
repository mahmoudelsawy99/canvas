import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { useSelector, useDispatch } from "react-redux";
import { setActiveObject } from "../../store/Slices/editorSlice";
import { createShape } from "./utils";
const ImageEditor = () => {
  const dispatch = useDispatch();

  const {
    selectedImageUrl,
    canvasObjects,
    backgroundColor,
    canvasWidth,
    canvasHeight,
    activeObject,
  } = useSelector((state) => state.editor);

  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );
  const canvasRef = useRef(null);
  const canvasInstanceRef = useRef(null);
  const imageRef = useRef(null);
  const selectedObjectRef = useRef(null);
  const textRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    const activepanelWidth = window.innerWidth - 500;
    const width = activePanel ? activepanelWidth : canvasWidth;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: width,
      height: canvasHeight || 200,
      backgroundColor: backgroundColor || "#fff",
      selection: true,
      evented: true,
    });

    canvasInstanceRef.current = canvas;
    const currentCanvasObjects = canvas.getObjects();
    const currentObjectsMap = new Map(
      currentCanvasObjects.map((obj) => [obj.id, obj])
    );

    if (selectedImageUrl) {
      fabric.Image.fromURL(selectedImageUrl, (img) => {
        if (!img) {
          console.error("Image failed to load.");
          return;
        }

        const scale = canvas.getHeight() / img.height;

        const left = (canvas.getWidth() - img.width * scale) / 2;

        img.set({
          left: left,
          top: 0,
          scaleX: scale,
          scaleY: scale,
          selectable: true,
          lockScalingY: true,
          lockMovementX: true,
          lockMovementY: true,
        });

        canvas.add(img);
        imageRef.current = img;
        const imageCenterX = img.left + (img.width * img.scaleX) / 2;
        const imageCenterY = img.top + (img.height * img.scaleY) / 2;
        canvasObjects.forEach((obj) => {
          if (obj.type === "text") {
            const existingObject = currentObjectsMap.get(obj.id);

            if (existingObject) {
              if (
                existingObject.text !== obj.text ||
                existingObject.fill !== obj.fill ||
                existingObject.fontFamily !== obj.fontFamily
              ) {
                existingObject.set({
                  text: obj.text,
                  fill: obj.fill,
                  fontFamily: obj.fontFamily,
                  fontStyle: obj.italic,
                  underline: obj.underline,
                  fontSize: obj.fontSize,
                  textAlign: obj.textAlign,
                });
              }
            } else {
              const text = new fabric.Textbox(obj.text, {
                left: imageCenterX,
                top: imageCenterY,
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
                textAlign: obj.textAlign || "left",
              });
              canvas.add(text);
              text.bringToFront();
            }
          } else if (obj.type === "shape") {
            const shape = createShape(obj, imageCenterX, imageCenterY);
            if (shape) {
              canvas.add(shape);
              shape.bringToFront();
            }
          }
        });

        canvas.on("selection:created", (e) => {
          let selected = e.selected[0];
          console.log("Selected object:", e.selected[0].id);

          if (selected.id !== selectedObject?.id) {
            selectedObjectRef.current = selected;
            const newSelectedObject = { id: selected.id, type: "text" };
            setSelectedObject(newSelectedObject);
            dispatch(setActiveObject(newSelectedObject));
          }
        });

        canvas.on("selection:updated", (e) => {
          const selected = e.selected;
          console.log("Updated selected object:", e.selected[0].id);
          if (selected.id !== selectedObject?.id) {
            selectedObjectRef.current = selected;
            const newSelectedObject = { id: selected.id, type: "text" };
            setSelectedObject(newSelectedObject);
            dispatch(setActiveObject(newSelectedObject));
          }
        });

        canvas.on("selection:cleared", () => {
          selectedObjectRef.current = null;
          setSelectedObject(null);
          dispatch(setActiveObject(null));
        });

        canvas.on("object:moving", (e) => {
          console.log("Object moving:", e.target);
        });

        canvas.on("object:scaling", (e) => {
          console.log("Object scaling:", e.target);
        });

        canvas.renderAll();
      });
    }

    return () => {
      canvas.dispose();
    };
  }, [
    activePanel,
    activeObject,
    selectedImageUrl,
    canvasObjects,
    backgroundColor,
    canvasWidth,
    canvasHeight,
    // dispatch,
    selectedObject,
  ]);

  return (
    <div
      className="h-5/6 w-5/6 bg-gray-50"
      style={{
        width: activePanel ? "calc(100vw - 450px)" : "calc(100vw - 90px)",
      }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default ImageEditor;
