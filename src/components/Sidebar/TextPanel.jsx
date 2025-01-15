function TextPanel() {
  return (
    <div
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full p-4">
        <div className="mb-6 text-right">
          <h2 className="text-lg font-medium text-gray-900 mb-1 "> نص</h2>
          <p className="text-sm text-gray-500">أضف نصًا إلى لوحتك</p>
        </div>

        <div>
          <button className="w-full h-10 bg-gray-900 text-white rounded-lg my-2 leading-10">
            أضف مربع نص
          </button>
          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            <span className="text-3xl font-bold">أضف عنوانًا</span>{" "}
          </button>

          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            <span className="text-xl font-semibold">أضف عنوان فرعى</span>{" "}
          </button>

          <button className="w-full h-16 bg-[#e5e7eb] text-gray-900 rounded-lg py-3 my-2">
            <span className="text-base">فقرة</span>
          </button>
        </div>
      </div>
    </div>
  );
}

TextPanel.displayName = "TextPanel";

export default TextPanel;
