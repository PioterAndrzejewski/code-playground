import CodeSection from "./CodeSection";
import Preview from "./Preview";
import ResizableBox from "./Resizable";
import "bulmaswatch/darkly/bulmaswatch.min.css";
import "./App.css";

function App() {
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
