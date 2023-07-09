import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import prettier from "prettier/standalone";
import jsparser from "prettier/parser-babel";
import "./code-editor.css";

interface CodeEditorProps {
  language: "html" | "css" | "javascript";
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const [value, setValue] = useState("");

  return (
    <div className='editor-wrapper'>
      <div className='top-bar'>{language}</div>
      <MonacoEditor
        height='calc(100% - 30px)'
        onChange={(newVal) => setValue(newVal || "")}
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
