import ToolbarButton from "./ToolbarButton";
import { Bold, Italic, Underline } from "lucide-react";

const TextFormattingControls = () => {
  return (
    <div className="flex items-center gap-1 ml-1">
      <ToolbarButton icon={Underline} />
      <ToolbarButton icon={Italic} />
      <ToolbarButton icon={Bold} className="font-bold" />
    </div>
  );
};

export default TextFormattingControls;
