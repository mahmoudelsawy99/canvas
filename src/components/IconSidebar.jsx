import { Grid, Image, Type, Shapes, Settings } from "lucide-react";
import { useState } from "react";
import ImagePanel from "./ImagePanel";
import SettingPanel from "./SettingPanel";
import ShapesPanel from "./ShapesPanel";
import TemplatesPanel from "./TemplatesPanel";
import TextPanel from "./TextPanel";

const navigationItems = [
  { icon: Grid, label: "القوالب", name: "templates" },
  { icon: Image, label: "صورة", name: "image" },
  { icon: Type, label: "نص", name: "text" },
  { icon: Shapes, label: "أشكال", name: "shapes" },
  { icon: Settings, label: "الإعدادات", name: "settings" },
];

function IconSidebar() {
  const [activePanel, setActivePanel] = useState(null);
  const renderActivePanel = () => {
    switch (activePanel) {
      case "templates":
        return <TemplatesPanel />;
      case "image":
        return <ImagePanel />;
      case "text":
        return <TextPanel />;
      case "shapes":
        return <ShapesPanel />;
      case "settings":
        return <SettingPanel />;
      default:
        return null;
    }
  };

  const handleButtonClick = (name) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel === name ? null : name
    );
  };
  return (
    <>
      <nav
        className="fixed right-0 top-0 h-screen w-[90px] bg-white border-l border-gray-200 flex flex-col items-center "
        dir="rtl"
      >
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="w-full py-4 flex flex-col items-center justify-center text-gray-500 hover:bg-[#F4F4F5] hover:text-gray-900 transition-colors"
            onClick={() => handleButtonClick(item.name)}
          >
            <item.icon className="w-5 h-5 my-2" />
            <span className="mt-1 text-[11px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      {renderActivePanel()}
    </>
  );
}

IconSidebar.displayName = "IconSidebar";

export default IconSidebar;
