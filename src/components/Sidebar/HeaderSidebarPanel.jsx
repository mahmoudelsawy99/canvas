export const HeaderSidebarPanel = (props) => {
  return (
    <div className="mb-6 text-right border-b p-4">
      <h2 className="text-lg font-medium text-gray-900 mb-1">{props.title}</h2>
      {props.description && (
        <p className="text-sm text-gray-500">{props.description}</p>
      )}
    </div>
  );
};
