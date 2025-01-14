function TemplatesPanel() {
  return (
    <div
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      {/* Panel Content */}
      <div className="flex flex-col h-full p-4">
        <div className="mb-6 text-right">
          <h2 className="text-lg font-medium text-gray-900 mb-1 "> القوالب</h2>
          <p className="text-sm text-gray-500">
            {" "}
            اختر من بين مجموعة متنوعة من القوالب للبدء{" "}
          </p>
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

TemplatesPanel.displayName = "TemplatesPanel";

export default TemplatesPanel;
