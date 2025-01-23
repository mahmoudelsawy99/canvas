import { FaCircle, FaSquareFull, FaSquare } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./../Sidebar/ui/SidebarToggle";
import { useDispatch } from "react-redux";
import { addShapeObject } from "../../store/Slices/editorSlice";

const shapes = [
  { type: "circle", icon: <FaCircle className="text-gray-900 w-12 h-12" /> },
  { type: "square", icon: <FaSquare className="text-gray-900 w-12 h-12" /> },
  {
    type: "squareFull",
    icon: <FaSquareFull className="text-gray-900 w-12 h-12" />,
  },
  {
    type: "triangle",
    icon: <IoTriangle className="text-gray-900 w-12 h-12" />,
  },
  {
    type: "triangleRotated",
    icon: <IoTriangle className="text-gray-900 w-12 h-12 rotate-180" />,
  },
  { type: "diamond", icon: <FaDiamond className="text-gray-900 w-12 h-12" /> },
];

function ShapesPanel() {
  const dispatch = useDispatch();
  const handleShapeClick = (shapeType) => {
    const initialProperties = {
      type: shapeType,
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: "#000",
      stroke: "#000000",
      strokeWidth: 2,
    };
    dispatch(addShapeObject(initialProperties));
  };

  return (
    <aside
      className="fixed right-[90px] top-16 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full py-4">
        <HeaderSidebarPanel
          title="الأشكال"
          description="أضف أشكالًا إلى لوحتك"
        />

        <div className="grid grid-cols-3 gap-4 px-4 pt-6 max-w-md">
          {shapes.map((shape, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-center cursor-pointer"
              onClick={() => handleShapeClick(shape.type)}
            >
              {shape.icon}
            </div>
          ))}
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

ShapesPanel.displayName = "ShapesPanel";

export default ShapesPanel;
