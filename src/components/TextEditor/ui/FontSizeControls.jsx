import ToolbarButton from "./ToolbarButton";
import { Minus, Plus } from "lucide-react";

const FontSizeControls = ({ value, onIncrement, onDecrement, onChange }) => {
  return (
    <div className="flex items-center justify-between ml-1 border border-gray-200 rounded">
      <ToolbarButton icon={Minus} onClick={onDecrement} />
      <div className="w-9 h-9 flex items-center justify-center text-sm text-gray-700 border-l border-r border-gray-200 text-center rounded-none">
        {value}
      </div>
      <ToolbarButton icon={Plus} onClick={onIncrement} />
    </div>
  );
};

export default FontSizeControls;
