import { useEffect } from "react";
import CodeSection from "./CodeSection";
import Preview from "./Preview";
import ResizableBox from "./Resizable";
import { useActions } from "../hooks/useActions";
import "bulmaswatch/darkly/bulmaswatch.min.css";
import "./App.css";

function App() {
  const { loadCells } = useActions();

  useEffect(() => {
    const storeFromLS = localStorage.getItem("cellsStore");
    if (storeFromLS) {
      const loadedState = JSON.parse(storeFromLS);
      loadCells(loadedState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='App'>
      <header>Options</header>
      <main className='playground-wrapper'>
        <ResizableBox direction='vertical'>
          <CodeSection />
        </ResizableBox>
        <Preview />
      </main>
    </div>
  );
}

export default App;
