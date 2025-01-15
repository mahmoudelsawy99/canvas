function ShapesPanel() {
  return (
    <div
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <div className="flex flex-col h-full p-4">
        <div className="mb-6 text-right">
          <h2 className="text-lg font-medium text-gray-900 mb-1 "> الأشكال</h2>
          <p className="text-sm text-gray-500">أضف أشكالًا إلى لوحتك</p>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 max-w-md">
          {/* Circle */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-900 rounded-full"></div>
          </div>

          {/* Square with Border */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-900"></div>
          </div>

          {/* Square (filled) */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-900"></div>
          </div>

          {/* Triangle */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <polygon points="24,0 48,48 0,48" fill="#111827" />
            </svg>
          </div>

          {/* Inverted Triangle */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <polygon points="0,0 48,0 24,48" fill="#111827" />
            </svg>
          </div>

          {/* Diamond */}
          <div className="border rounded-lg p-4 flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShapesPanel.displayName = "ShapesPanel";

export default ShapesPanel;
