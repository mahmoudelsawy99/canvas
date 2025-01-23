import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./ui/SidebarToggle";
import { useDispatch, useSelector } from "react-redux";
import { updateTextColor } from "../../store/Slices/editorSlice";

function FillColorPanel() {
  const dispatch = useDispatch();
  const activeObject = useSelector((state) => state.editor.activeObject);
  const [fillColor, setFillColor] = useState("#000000");

  const handleFillColorChange = (newColor) => {
    setFillColor(newColor);
    if (activeObject && activeObject.type === "text") {
      dispatch(updateTextColor({ id: activeObject.id, fill: newColor }));
    }
  };

  return (
    <aside
      className="fixed right-[90px] top-16 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col py-4 text-right">
        <HeaderSidebarPanel title=" لون الخط" description="أختر لون للخط" />
        <div className="my-3 px-4 flex justify-center items-center">
          <ColorPicker
            value={fillColor}
            onChange={(e) => handleFillColorChange(e)}
          />
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}
FillColorPanel.displayName = "FillColorPanel";
export default FillColorPanel;
