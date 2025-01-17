const ToolbarButton = ({ icon: Icon, onClick, className, ...props }) => {
  return (
    <button
      className={`p-2 hover:bg-gray-100 rounded ${className}`}
      onClick={onClick}
      {...props}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default ToolbarButton;
