import { HeaderSidebarPanel } from "./HeaderSidebarPanel";
import { SidebarToggle } from "./SidebarToggle";
export const fonts = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Palatino",
  "Bookman",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Geneva",
  "Lucida Console",
  // Arabic Fonts
  "Amiri",
  "Cairo",
  "Droid Arabic Naskh",
  "Noto Naskh Arabic",
  "Scheherazade",
  "Almarai",
  "Lateef",
  "Tajawal",
  "Sakkal Majalla",
  "Kufi Standard",
];
function FontPanel() {
  return (
    <aside
      className="fixed right-[90px] top-0 h-screen w-[360px] bg-white border-l border-gray-200 transform transition-transform duration-300 z-10 translate-x-0"
      dir="rtl"
    >
      <HeaderSidebarPanel title="الخط" description="تغيير نوع الحط" />
      <div
        className="w-full flex-1 pt-6 px-4 overflow-y-auto custom-scrollbar"
        dir="ltr"
      >
        {fonts.map((font, index) => (
          <button
            key={index}
            className="w-full h-16 bg-[#e5e7eb] text-black rounded-lg py-2 my-2 leading-10"
            style={{ fontFamily: font }}
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
