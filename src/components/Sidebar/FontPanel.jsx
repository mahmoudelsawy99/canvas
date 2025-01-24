import { useState } from "react";
import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./ui/SidebarToggle";
import { fonts } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { updateTextFontFamily } from "../../store/Slices/editorSlice";

function FontPanel() {
  const dispatch = useDispatch();
  const { activeObject } = useSelector((state) => state.editor);
  const [selectedFont, setSelectedFont] = useState("Arial");

  const handleFontChange = (font) => {
    setSelectedFont(font);
    if (activeObject && activeObject.type === "text") {
      dispatch(updateTextFontFamily({ id: activeObject.id, fontFamily: font }));
    }
  };

  return (
    <aside
      className="fixed right-[90px] top-16 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <HeaderSidebarPanel title="الخط" description="تغيير نوع الحط" />
      <div
        className="w-full flex-1 pt-6 px-4 overflow-y-auto custom-scrollbar"
        dir="ltr"
        style={{ maxHeight: "calc(100vh - 90px)" }}
      >
        {fonts.map((font, index) => (
          <button
            key={index}
            className="w-full h-16 bg-[#e5e7eb] text-black rounded-lg py-2 my-2 leading-10"
            style={{ fontFamily: font }}
            onClick={() => handleFontChange(font)}
          >
            {font}
          </button>
        ))}
      </div>
      <SidebarToggle />
    </aside>
  );
}

export default FontPanel;
