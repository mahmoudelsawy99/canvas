import React, { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ChevronDown,
  Lock,
  Trash,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  Square,
} from "lucide-react";
import { RxTransparencyGrid } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setActivePanel } from "../../store/Slices/sidebarSlice";

const TextEditorToolbar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(16);
  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );
  const togglePanel = (name) => {
    dispatch(setActivePanel(name));
  };

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => Math.max(prev - 1, 0));
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setValue(newValue);
    }
  };
  return (
    <div
      className={`flex gap-1 ${
        activePanel
          ? "justify-start items-left pl-32"
          : "justify-end items-left pr-40"
      } py-2 bg-white border-b border-t border-gray-200 `}
    >
      {/* Left section */}
      <div className="flex items-center justify-between gap-1">
        <button className="p-2 hover:bg-gray-100 rounded">
          <Lock className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Trash className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => togglePanel("opacity")}
        >
          <RxTransparencyGrid className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Arrow controls */}
      <div className="flex items-center justify-between gap-1 ml-1">
        <button className="p-2 hover:bg-gray-100 rounded">
          <ArrowDown className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <ArrowUp className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Alignment controls */}
      <div className="flex items-center justify-between gap-1 ml-1">
        <button className="p-2 hover:bg-gray-100 rounded">
          <AlignLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <AlignCenter className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <AlignRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Font size controls */}
      <div className="flex items-center justify-between ml-1 border border-gray-200 rounded">
        <button className="p-2 hover:bg-gray-100" onClick={decrement}>
          <Minus className="w-5 h-5 text-gray-600" />
        </button>
        <div
          className="w-9 h-9 flex items-center justify-center text-sm text-gray-700 border-l border-r border-gray-200 text-center rounded-none"
          onChange={handleInputChange}
        >
          {value}
        </div>
        <button className="p-2 hover:bg-gray-100" onClick={increment}>
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Text formatting */}
      <div className="flex items-center gap-1 ml-1">
        <button className="p-2 hover:bg-gray-100 rounded">
          <Underline className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Italic className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded font-bold">
          <Bold className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Font selector */}
      <div className="flex items-center ml-1">
        <button
          className="flex items-center gap-1 px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          onClick={() => togglePanel("font")}
        >
          <ChevronDown className="w-5 h-5" />
          Arial
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={() => togglePanel("fillColor")}
        >
          <Square className="w-5 h-5" fill="black" />
        </button>
      </div>
    </div>
  );
};

export default TextEditorToolbar;
