import { Search, Upload } from "lucide-react";
import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./../Sidebar/ui/SidebarToggle";
import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.jpg";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../../store/Slices/editorSlice";

function ImagePanel() {
  const dispatch = useDispatch();

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File uploaded:", file);
    }
  };

  const handleImageClick = (imageUrl) => {
    dispatch(setSelectedImage(imageUrl));
  };

  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full">
        <HeaderSidebarPanel title="الصور" description="أضف الصور إلى لوحتك" />

        <div className="px-4 pt-6 border-b">
          <label className="mb-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <div className="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-2 text-gray-600">
                <Upload className="w-5 h-5" />
                <span className="text-sm">رفع</span>
              </div>
            </div>
          </label>

          <div className="relative mb-4 mt-4">
            <input
              type="text"
              placeholder="البحث عن صور"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4" dir="ltr">
          <img
            src={image1}
            alt="Floral frame 1"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image1)}
          />
          <img
            src={image3}
            alt="Floral frame 2"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image3)}
          />
          <img
            src={image2}
            alt="Photo preview"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
            onClick={() => handleImageClick(image2)}
          />
        </div>
      </div>
      <SidebarToggle />
    </aside>
  );
}

ImagePanel.displayName = "ImagePanel";

export default ImagePanel;
