import { Search, Upload } from "lucide-react";
function ImagePanel() {
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here
      console.log("File uploaded:", file);
    }
  };
  return (
    <div
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      {/* Panel Content */}
      <div className="flex flex-col h-full p-4">
        <div className="mb-6 text-right">
          <h2 className="text-lg font-medium text-gray-900 mb-1 ">الصور</h2>
          <p className="text-sm text-gray-500">أضف الصور إلى لوحتك</p>
        </div>

        {/* Upload Button */}
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

        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="البحث عن صور"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 overflow-y-auto">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Floral frame 1"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
          />
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Floral frame 2"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
          />
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Photo preview"
            className="w-full aspect-square object-cover rounded-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

ImagePanel.displayName = "ImagePanel";

export default ImagePanel;
