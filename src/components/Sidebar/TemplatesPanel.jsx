import { HeaderSidebarPanel } from "./ui/HeaderSidebarPanel";
import { SidebarToggle } from "./../Sidebar/ui/SidebarToggle";

function TemplatesPanel() {
  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
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
      <SidebarToggle />
    </aside>
  );
}

TemplatesPanel.displayName = "TemplatesPanel";

export default TemplatesPanel;
