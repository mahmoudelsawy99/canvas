import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";

function FillColorPanel() {
  const [color, setColor] = useState("rgba(255,255,255,1)");

  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0 overflow-y-auto scroll-smooth"
      dir="ltl"
    >
      <div className="flex flex-col py-4 text-right">
        <HeaderSidebarPanel title=" لون الخط" description="أختر لون للخط" />
        <div className="my-3 px-4 flex justify-center items-center">
          <ColorPicker value={color} onChange={setColor} />
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}
FillColorPanel.displayName = "FillColorPanel";
export default FillColorPanel;
