import CodeEditor from "./CodeEditor";
import ResizableBox from "./Resizable";
import "./code-section.css";

function CodeSection() {
  return (
    <section className='code-section'>
      <CodeEditor language='html' />
      <CodeEditor language='css' />
      <CodeEditor language='javascript' />
    </section>
  );
}

export default CodeSection;
