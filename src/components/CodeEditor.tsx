import MonacoEditor from "@monaco-editor/react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CellsState } from "../state";
import "./code-editor.css";

interface CodeEditorProps {
  language: "html" | "css" | "javascript";
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const { updateCell } = useActions();
  const { data } = useTypedSelector((state) => state.cells);

  return (
    <div className='editor-wrapper'>
      <div className='top-bar'>{language}</div>
      <MonacoEditor
        defaultValue={data[language].content}
        height='calc(100% - 30px)'
        onChange={(newVal) => updateCell(language, newVal || "")}
        language={language}
        theme='dark'
        options={{
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 14,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
