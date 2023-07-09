import { useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./preview.css";

const Preview: React.FC = () => {
  const iFrame = useRef<any>();
  const { data, bundle } = useTypedSelector((state) => state.cells);

  const htmlToInject = `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        overflow: hidden;
      }
      ${data.css.content}
    </style>
  </head>
  <body>
      <div id="root"></div>
    ${data.html.content}
    <script>
    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style="color: red;"><h2>Runtime error</h2>' + err + '</div>';
      console.error(err)
    };
    window.addEventListener('error', event => {
      event.preventDefault();
      handleError(event.message);
    }, false)
    window.addEventListener('message', event => {
      try {
        eval(event.data);
      } catch (err) {
        handleError(err);
      }
    }, false)
    </script>
  </body>
  </html>
  `;

  useEffect(() => {
    if (iFrame.current) {
      iFrame.current.srcdoc = htmlToInject;
    }
    setTimeout(() => {
      iFrame.current.contentWindow.postMessage(bundle.code, "*");
    }, 50);
  }, [bundle, htmlToInject]);

  return (
    <div className='preview-wrapper'>
      {bundle.err ? (
        <div className='preview-error'>
          <h1>Bundling error</h1>
          <p>{bundle.err.replace("index.js", "users code")}</p>
        </div>
      ) : (
        <iframe
          srcDoc={htmlToInject}
          title='preview-window'
          sandbox='allow-scripts allow-modals'
          ref={iFrame}
        />
      )}
    </div>
  );
};

export default Preview;
