import { useDispatch } from "react-redux";
import { setActivePanel } from "../../store/Slices/sidebarSlice";
import { navigationItems } from "./types";
import ActivePanel from "./ActivePanel";
function IconSidebar() {
  const dispatch = useDispatch();
  const togglePanel = (name) => {
    dispatch(setActivePanel(name));
  };

  return (
    <>
      <aside
        className="fixed right-0 top-16 h-screen w-[90px] bg-white border-l border-gray-200 flex flex-col items-center"
        dir="rtl"
      >
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="w-full py-4 flex flex-col items-center justify-center text-gray-500 hover:bg-[#F4F4F5] hover:text-gray-900 transition-colors"
            onClick={() => togglePanel(item.name)}
          >
            <item.icon className="w-5 h-5 my-2" />
            <span className="mt-1 text-[11px] font-medium">{item.label}</span>
          </button>
        ))}
      </aside>
      <ActivePanel />
    </>
  );
}

IconSidebar.displayName = "IconSidebar";
export default IconSidebar;
