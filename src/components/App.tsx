import CodeSection from "./CodeSection";
import Preview from "./Preview";
import ResizableBox from "./Resizable";
import "bulmaswatch/darkly/bulmaswatch.min.css";
import "./App.css";

const firstHTML = `<div>Hello world</div>`;
const firstCSS = `div {background-color: #999}`;
const firstJS = `console.log('inside js works')`;

function App() {
  return (
    <div className='App'>
      <header>Options</header>
      <main className='playground-wrapper'>
        <ResizableBox direction='vertical'>
          <CodeSection />
        </ResizableBox>
        <Preview
          htmlCode={firstHTML}
          cssCode={firstCSS}
          jsCode={firstJS}
          error=''
        />
      </main>
    </div>
  );
}

export default App;
