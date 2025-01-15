import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

function SettingPanel() {
  const [height, setHeight] = useState("270");
  const [width, setWidth] = useState("794");
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <div
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0 overflow-y-auto scroll-smooth"
      dir="ltl"
    >
      <div className="flex flex-col p-4 text-right">
        <div className="mb-6 text-right">
          <h2 className="text-lg font-medium text-gray-900 mb-1 ">
            {" "}
            الاعدادات
          </h2>
          <p className="text-sm text-gray-500">
            قم بتغيير مظهر مساحة العمل الخاصة بك
          </p>
        </div>
        <div className="w-full max-w-md p-3 space-y-4" dir="rtl">
          <div className="space-y-2">
            <label className="block text-gray-700">الارتفاع</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700">العرض</label>
            <input
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="w-full bg-gray-900 text-white rounded py-3 hover:bg-gray-800 transition-colors">
            تغيير الحجم
          </button>
        </div>
        <div className="my-3">
          <ColorPicker value={color} onChange={setColor} />
        </div>
      </div>
    </div>
  );
}
SettingPanel.displayName = "SettingPanel";

export default SettingPanel;
