import { fabric } from "fabric";

export const createShape = (obj, imageCenterX, imageCenterY) => {
  const shapeConfig = {
    left: imageCenterX,
    top: imageCenterY,
    fill: obj.fill || "#000",
    stroke: obj.stroke || "#000000",
    strokeWidth: obj.strokeWidth || 2,
    selectable: true,
    originX: "center",
    originY: "center",
  };

  switch (obj.shapeType) {
    case "circle":
      return new fabric.Circle({
        ...shapeConfig,
        radius: obj.width / 2,
      });
    case "squareFull":
      return new fabric.Rect({
        ...shapeConfig,
        width: obj.width,
        height: obj.height,
      });
    case "triangle":
      return new fabric.Triangle({
        ...shapeConfig,
        width: obj.width,
        height: obj.height,
      });
    case "triangleRotated":
      return new fabric.Triangle({
        ...shapeConfig,
        width: obj.width,
        height: obj.height,
        angle: 180,
      });
    case "diamond":
      return new fabric.Polygon(
        [
          { x: 0, y: obj.height / 2 },
          { x: obj.width / 2, y: 0 },
          { x: obj.width, y: obj.height / 2 },
          { x: obj.width / 2, y: obj.height },
        ],
        shapeConfig
      );
    default:
      return null;
  }
};
