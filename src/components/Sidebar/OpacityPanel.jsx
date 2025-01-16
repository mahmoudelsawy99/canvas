import { useState } from "react";
import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";

function OpacitySidebar() {
  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (values) => {
    setOpacity(values[0]);
  };

  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <HeaderSidebarPanel title="الشفافية" description="تغيير شفافية الصورة" />
      <SidebarToggle />
    </aside>
  );
}

export default OpacitySidebar;
