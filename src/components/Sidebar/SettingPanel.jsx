import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./../Sidebar/ui/SidebarToggle";

function SettingPanel() {
  const [height, setHeight] = useState("270");
  const [width, setWidth] = useState("794");
  const [bgColor, setBgColor] = useState("#ffffff"); // Default color
  return (
    <aside
      className="fixed right-[90px] top-0 flex flex-col h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="ltl"
    >
      <div className="flex flex-col text-right h-full">
        <HeaderSidebarPanel
          title=" الاعدادات"
          description="  قم بتغيير مظهر مساحة العمل الخاصة بك"
        />
        <div
          className="w-full flex-1 pt-6 overflow-y-auto custom-scrollbar"
          dir="ltl"
        >
          <div className="w-full max-w-md py-2 px-4 space-y-4" dir="rtl">
            <div className="space-y-2">
              <label className="block text-gray-700">الارتفاع</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:[#F4F4F5]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700">العرض</label>
              <input
                type="text"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:[#F4F4F5]"
              />
            </div>

            <button className="w-full bg-gray-900 text-white rounded py-3 hover:bg-gray-800 transition-colors">
              تغيير الحجم
            </button>
          </div>
          <div className="my-3 px-4 flex justify-center items-center">
            <ColorPicker value={bgColor} onChange={setBgColor} />
          </div>
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

SettingPanel.displayName = "SettingPanel";
export default SettingPanel;
