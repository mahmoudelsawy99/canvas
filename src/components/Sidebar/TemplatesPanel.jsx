import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./../Sidebar/ui/SidebarToggle";
import image1 from "../../../public/images/image1.png";
import image2 from "../../../public/images/image2.png";
import image3 from "../../../public/images/image3.png";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../store/Slices/editorSlice";

function TemplatesPanel() {
  const dispatch = useDispatch();

  const handleImageClick = (imageUrl) => {
    dispatch(setSelectedImage(imageUrl));
  };

  return (
    <aside
      className="fixed right-[90px] top-16 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      {/* Panel Content */}
      <div className="flex flex-col h-full py-4">
        <HeaderSidebarPanel
          title="القوالب"
          description="اختر من بين مجموعة متنوعة من القوالب للبدء"
        />

        <div className="grid grid-cols-2 gap-4 pt-6 overflow-y-auto px-4">
          <img
            src={image1}
            alt="Floral frame 1"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image1)}
          />
          <img
            src={image2}
            alt="Floral frame 2"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image2)}
          />
          <img
            src={image3}
            alt="Photo preview"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image3)}
          />
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

TemplatesPanel.displayName = "TemplatesPanel";

export default TemplatesPanel;
