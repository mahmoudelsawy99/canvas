import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const ImageEditor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const calculatedWidth = window.innerWidth - 90;
    // Initialize Fabric.js canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: calculatedWidth,
      height: 200,
      backgroundColor: "#f0f0f0", // Background color of the canvas
      selection: true, // Enable object selection
    });

    // Add a rectangle to the canvas
    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      width: 100,
      height: 100,
      fill: "red",
      angle: 0,
      selectable: true,
    });
    canvas.add(rect);

    // Add text to the canvas
    const text = new fabric.Textbox("Hello, Fabric.js!", {
      left: 200,
      top: 100,
      fontSize: 20,
      fill: "blue",
      selectable: true,
    });
    canvas.add(text);

    // Add an image to the canvas
    fabric.Image.fromURL("https://via.placeholder.com/150", (img) => {
      img.set({ left: 400, top: 50, selectable: true });
      canvas.add(img);
    });

    // Handle object selection
    canvas.on("object:selected", (e) => {
      console.log("Object selected:", e.target);
    });

    // Handle object movement
    canvas.on("object:moving", (e) => {
      console.log("Object moving:", e.target);
    });

    // Handle object scaling
    canvas.on("object:scaling", (e) => {
      console.log("Object scaling:", e.target);
    });

    // Cleanup on component unmount
    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="flex-1 h-full w-full">
      <canvas ref={canvasRef} className="" />
    </div>
  );
};

export default ImageEditor;
