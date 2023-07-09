import { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./code-editor.css";

interface CodeEditorProps {
  language: "html" | "css" | "javascript";
}

const jsInjection = `import _React from 'react'; import _ReactDOM from 'react-dom';`;

let defaultIsLoaded = false;

const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const [value, setValue] = useState("");
  const { createBundle, updateCell } = useActions();
  const data = useTypedSelector((state) => state.cells.data);

  useEffect(() => {
    if (!defaultIsLoaded) {
      setTimeout(() => (defaultIsLoaded = true), 1000);
      return;
    }
    if (language !== "javascript") {
      updateCell(language, value);
      return;
    }

    const timer = setTimeout(async () => {
      if (value) {
        updateCell(language, value);
        createBundle(jsInjection + value);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className='editor-wrapper'>
      <div className='top-bar'>{language}</div>
      <MonacoEditor
        defaultValue={data[language].content}
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
