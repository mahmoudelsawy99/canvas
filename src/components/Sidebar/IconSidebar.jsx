import { Grid, Image, Type, Shapes, Settings } from "lucide-react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePanel } from "../../store/Slices/sidebarSlice";
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
  const dispatch = useDispatch();
  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );

  const togglePanel = (name) => {
    dispatch(setActivePanel(name));
  };

  const renderActivePanel = () => {
    if (!activePanel) return null;

    const panels = {
      templates: <TemplatesPanel />,
      image: <ImagePanel />,
      text: <TextPanel />,
      shapes: <ShapesPanel />,
      settings: <SettingPanel />,
    };

    return panels[activePanel];
  };

  return (
    <>
      <nav
        className="fixed right-0 top-0 h-screen w-[90px] bg-white border-l border-gray-200 flex flex-col items-center"
        dir="rtl"
      >
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="w-full py-4 flex flex-col items-center justify-center text-gray-500 hover:bg-[#F4F4F5] hover:text-gray-900 transition-colors"
            onClick={() => togglePanel(item.name)}
          >
            <item.icon className="w-5 h-5 my-2" />
            <span className="mt-1 text-[11px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {isSidebarVisible && renderActivePanel()}
    </>
  );
}

IconSidebar.displayName = "IconSidebar";
export default IconSidebar;
