import CodeEditor from "./CodeEditor";
import ResizableBox from "./Resizable";
import "./code-section.css";

function CodeSection() {
  return (
    <section className='code-section'>
      <ResizableBox direction='horizontal'>
        <CodeEditor language='html' />
      </ResizableBox>
      <ResizableBox direction='horizontal'>
        <CodeEditor language='css' />
      </ResizableBox>
      <div className='rest'>
        <CodeEditor language='javascript' />
      </div>
    </section>
  );
}

export default CodeSection;
