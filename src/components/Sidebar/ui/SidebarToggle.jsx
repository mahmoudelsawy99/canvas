import { ChevronsLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store/Slices/sidebarSlice";

export const SidebarToggle = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <button
      className="absolute -right-[1.80rem] h-[70px] bg-white top-1/2 transform -translate-y-1/2 flex items-center justify-center rounded-r-xl px-1 pr-2 border-r border-y group z-40"
      onClick={handleSidebarToggle} // Dispatch action on click
    >
      <ChevronsLeft className="size-4 text-black group-hover:opacity-75 transition" />
    </button>
  );
};
