import { useState } from "react";
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
import {
  updateTextFontSize,
  updateTextFontWeight,
  updateTextAlign,
  updateTextFontStyle,
  updateTextUnderline,
} from "../../store/Slices/editorSlice";

const TextEditorToolbar = () => {
  const dispatch = useDispatch();
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("left");

  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );
  const { activeObject } = useSelector((state) => state.editor);
  const togglePanel = (name) => {
    dispatch(setActivePanel(name));
  };

  const increment = () => {
    const newSize = fontSize + 1;
    setFontSize(newSize);
    if (activeObject) {
      dispatch(updateTextFontSize({ id: activeObject.id, fontSize: newSize }));
    }
  };

  const decrement = () => {
    const newSize = Math.max(fontSize - 1, 0);
    setFontSize(newSize);
    if (activeObject) {
      dispatch(updateTextFontSize({ id: activeObject.id, fontSize: newSize }));
    }
  };

  const toggleBold = () => {
    const newWeight = isBold ? "normal" : "bold";
    setIsBold(!isBold);
    if (activeObject) {
      dispatch(
        updateTextFontWeight({ id: activeObject.id, fontWeight: newWeight })
      );
    }
  };

  const toggleItalic = () => {
    const newStyle = isItalic ? "normal" : "italic";
    setIsItalic(!isItalic);
    if (activeObject) {
      dispatch(
        updateTextFontStyle({ id: activeObject.id, fontStyle: newStyle })
      );
    }
  };

  const toggleUnderline = () => {
    const newUnderline = !isUnderline;
    setIsUnderline(newUnderline);
    if (activeObject) {
      dispatch(
        updateTextUnderline({ id: activeObject.id, underline: newUnderline })
      );
    }
  };

  const handleAlignLeft = () => {
    setTextAlign("left");
    if (activeObject) {
      dispatch(updateTextAlign({ id: activeObject.id, textAlign: "left" }));
    }
  };

  const handleAlignCenter = () => {
    setTextAlign("center");
    if (activeObject) {
      dispatch(updateTextAlign({ id: activeObject.id, textAlign: "center" }));
    }
  };

  const handleAlignRight = () => {
    setTextAlign("right");
    if (activeObject) {
      dispatch(updateTextAlign({ id: activeObject.id, textAlign: "right" }));
    }
  };

  // const increment = () => setFontSize((prev) => prev + 1);
  // const decrement = () => setFontSize((prev) => Math.max(prev - 1, 0));
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setFontSize(newValue);
    }
  };
  return (
    <div
      className={`flex gap-1 ${
        activePanel
          ? "justify-start items-left pl-10"
          : "justify-end items-left pr-10"
      } py-2 bg-white border-b border-t border-gray-200 `}
      style={{
        width: activePanel ? "calc(100vw - 450px)" : "calc(100vw - 90px)",
      }}
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
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={handleAlignLeft}
        >
          <AlignLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={handleAlignCenter}
        >
          <AlignCenter className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={handleAlignRight}
        >
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
          {fontSize}
        </div>
        <button className="p-2 hover:bg-gray-100" onClick={increment}>
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Text formatting */}
      <div className="flex items-center gap-1 ml-1">
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={toggleUnderline}
        >
          <Underline className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={toggleItalic}
        >
          <Italic className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded font-bold"
          onClick={toggleBold}
        >
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
