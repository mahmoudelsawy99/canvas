import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";

function TextPanel() {
  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full py-4">
        <HeaderSidebarPanel title="نص" description="أضف نصًا إلى لوحتك" />

        <div className="px-4 pt-6">
          <button className="w-full h-10 bg-gray-900 text-white rounded-lg my-2 leading-10">
            أضف مربع نص
          </button>
          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            <span className="text-3xl font-bold">أضف عنوانًا</span>{" "}
          </button>

          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            <span className="text-xl font-semibold">أضف عنوان فرعى</span>{" "}
          </button>

          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            فقرة
          </button>
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

TextPanel.displayName = "TextPanel";

export default TextPanel;
