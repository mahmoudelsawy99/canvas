import TextEditorToolbar from "../components/TextEditor/TextEditorbar";
import IconSidebar from "../components/Sidebar/IconSidebar";
import ImageEditor from "../components/Editor/ImageEditor";

const Editor = () => {
  return (
    <div>
      <IconSidebar />
      <TextEditorToolbar />
      <ImageEditor />
    </div>
  );
};

export default Editor;
