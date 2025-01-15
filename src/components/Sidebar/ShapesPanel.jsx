import { FaCircle, FaSquareFull, FaSquare } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";
import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";

function ShapesPanel() {
  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full py-4">
        <HeaderSidebarPanel
          title="الأشكال"
          description="أضف أشكالًا إلى لوحتك"
        />

        <div className="grid grid-cols-3 gap-4 px-4 max-w-md">
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <FaCircle className="text-gray-900 w-12 h-12" />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-center">
            <FaSquare className="text-gray-900 w-12 h-12" />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-center">
            <FaSquareFull className="text-gray-900 w-12 h-12" />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-center">
            <IoTriangle className="text-gray-900 w-12 h-12" />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-center">
            <IoTriangle className="text-gray-900 w-12 h-12 rotate-180" />
          </div>

          <div className="border rounded-lg p-4 flex items-center justify-center">
            <FaDiamond className="text-gray-900 w-12 h-12" />
          </div>
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

ShapesPanel.displayName = "ShapesPanel";

export default ShapesPanel;
