import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import image1 from "../../../public/images/image1.jpg";
import { useSelector, useDispatch } from "react-redux";

const ImageEditor = () => {
  const {
    selectedImageUrl,
    canvasObjects,
    backgroundColor,
    canvasWidth,
    canvasHeight,
  } = useSelector((state) => state.editor);
  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const activepanelWidth = window.innerWidth - 500;
    const width = activePanel ? activepanelWidth : canvasWidth;
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: width,
      height: canvasHeight || 200,
      backgroundColor: backgroundColor || "#fff",
      selection: true,
    });

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
            const text = new fabric.Textbox(obj.text, {
              left: imageCenterX,
              top: imageCenterY,
              fontSize: obj.fontSize || 20,
              fontWeight: obj.fontWeight || "normal",
              fill: "#101011",
              selectable: true,
              originX: "center",
              originY: "center",
            });
            canvas.add(text);
            text.bringToFront();
            textRef.current = text;
          }
        });

        canvas.renderAll();
      });
    }

    canvas.on("object:selected", (e) => {
      console.log("Object selected:", e.target);
    });

    canvas.on("object:moving", (e) => {
      console.log("Object moving:", e.target);
    });

    canvas.on("object:scaling", (e) => {
      console.log("Object scaling:", e.target);
    });

    return () => {
      canvas.dispose();
    };
  }, [
    activePanel,
    selectedImageUrl,
    canvasObjects,
    backgroundColor,
    canvasWidth,
    canvasHeight,
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
