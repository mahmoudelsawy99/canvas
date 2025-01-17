import { useSelector } from "react-redux";
import ImagePanel from "./ImagePanel";
import SettingPanel from "./SettingPanel";
import ShapesPanel from "./ShapesPanel";
import TemplatesPanel from "./TemplatesPanel";
import TextPanel from "./TextPanel";
import FillColorPanel from "./FillColorPanel";
import OpacitySidebar from "./OpacityPanel";
import FontPanel from "./FontPanel";
function ActivePanel() {
  const { isSidebarVisible, activePanel } = useSelector(
    (state) => state.sidebar
  );
  const renderActivePanel = () => {
    if (!activePanel) return null;

    const panels = {
      templates: <TemplatesPanel />,
      image: <ImagePanel />,
      text: <TextPanel />,
      shapes: <ShapesPanel />,
      settings: <SettingPanel />,
      fillColor: <FillColorPanel />,
      opacity: <OpacitySidebar />,
      font: <FontPanel />,
    };

    return panels[activePanel];
  };

  return <>{isSidebarVisible && renderActivePanel()}</>;
}

ActivePanel.displayName = "ActivePanel";
export default ActivePanel;
