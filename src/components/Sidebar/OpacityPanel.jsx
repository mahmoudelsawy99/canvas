import { useState } from "react";
import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";

function OpacitySidebar() {
  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (event) => {
    setOpacity(parseFloat(event.target.value));
  };

  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <HeaderSidebarPanel title="الشفافية" description="تغيير شفافية الصورة" />
      <div className="p-4 border-b">
        <div className="flex items-center">
          <input
            id="opacity-range"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={handleOpacityChange}
            className="w-full"
          />
        </div>
      </div>

      <SidebarToggle />
    </aside>
  );
}

export default OpacitySidebar;
