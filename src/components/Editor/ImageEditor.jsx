import { useEffect, useRef, useState, useMemo } from "react";
import { fabric } from "fabric";
import { useSelector, useDispatch } from "react-redux";
import { setActiveObject } from "../../store/Slices/editorSlice";
import { createShape } from "./utils";
import { jsPDF } from "jspdf";

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

  const { activePanel } = useSelector((state) => state.sidebar);

  const canvasRef = useRef(null);
  const canvasInstanceRef = useRef(null);
  const imageRef = useRef(null);
  const selectedObjectRef = useRef(null);
  const [selectedObject, setSelectedObject] = useState(null);

  const canvasDimensions = useMemo(() => {
    const activepanelWidth = window.innerWidth - 500;
    return {
      width: activePanel ? activepanelWidth : canvasWidth,
      height: canvasHeight || 200,
    };
  }, [activePanel, canvasWidth, canvasHeight]);

  function generatePDF() {
    const canvas = canvasInstanceRef.current;

    const imgData = canvas.toDataURL({
      format: "png",
      multiplier: 4,
    });

    const canvasWidth = canvas.getWidth();
    const canvasHeight = canvas.getHeight();

    const repeatCount = 4;

    const spaceBetween = 20;

    const totalHeight =
      canvasHeight * repeatCount + spaceBetween * (repeatCount - 1);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvasWidth, totalHeight],
    });

    const xOffset = (pdf.internal.pageSize.getWidth() - canvasWidth) / 2;

    for (let i = 0; i < repeatCount; i++) {
      pdf.addImage(
        imgData,
        "PNG",
        xOffset,
        (canvasHeight + spaceBetween) * i,
        canvasWidth,
        canvasHeight
      );
    }

    pdf.save("fabric-canvas-vertical-repeat-centered.pdf");
  }

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: canvasDimensions.width,
      height: canvasDimensions.height,
      backgroundColor: backgroundColor || "#fff",
      selection: true,
      evented: true,
    });

    canvasInstanceRef.current = canvas;

    canvas.on("selection:created", (e) => {
      const selected = e.selected[0];
      if (selected.id !== selectedObject?.id) {
        selectedObjectRef.current = selected;
        const newSelectedObject = { id: selected.id, type: "text" };
        setSelectedObject(newSelectedObject);
        dispatch(setActiveObject(newSelectedObject));
      }
    });

    canvas.on("selection:updated", (e) => {
      const selected = e.selected[0];
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

    return () => {
      canvas.dispose();
    };
  }, [canvasDimensions, dispatch]);

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
        lockScalingY: true,
        lockMovementX: true,
        lockMovementY: true,
      });

      // Remove existing image if it exists
      if (imageRef.current) {
        canvas.remove(imageRef.current);
      }

      // Add new image to canvas
      canvas.add(img);
      imageRef.current = img;
      imageRef.current.bringToFront();

      // Render the canvas
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

    // Clear existing objects (except the image)
    canvas.getObjects().forEach((obj) => {
      if (obj !== imageRef.current) {
        canvas.remove(obj);
      }
    });

    // Add new canvas objects
    canvasObjects.forEach((obj) => {
      if (obj.type === "text") {
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

    // Render the canvas
    canvas.renderAll();
  }, [canvasObjects]);

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
      {/* Add a button to generate PDF */}
      <button
        onClick={generatePDF}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default ImageEditor;
