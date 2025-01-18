import TextEditorToolbar from "../components/TextEditor/TextEditorbar";
import IconSidebar from "../components/Sidebar/IconSidebar";
import ImageEditor from "../components/Editor/ImageEditor";

const Editor = () => {
  return (
    <div className="h-screen w-screen">
      <IconSidebar />
      <TextEditorToolbar />
      <ImageEditor />
    </div>
  );
};

export default Editor;
