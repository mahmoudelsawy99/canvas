import ToolbarButton from "./ToolbarButton";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const AlignmentControls = () => {
  return (
    <div className="flex items-center justify-between gap-1 ml-1">
      <ToolbarButton icon={AlignLeft} />
      <ToolbarButton icon={AlignCenter} />
      <ToolbarButton icon={AlignRight} />
    </div>
  );
};

export default AlignmentControls;
