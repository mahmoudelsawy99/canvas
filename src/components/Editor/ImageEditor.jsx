import { useSelector } from "react-redux";
const ImageEditor = ({ canvasRef }) => {
  const { activePanel } = useSelector((state) => state.sidebar);

  return (
    <div
      className="h-4/5 w-5/6 bg-gray-50"
      style={{
        width: activePanel ? "calc(100vw - 450px)" : "calc(100vw - 90px)",
        height: "calc(100vh -50px)",
      }}
    >
      <div className="h-full w-full flex justify-center items-center">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default ImageEditor;
