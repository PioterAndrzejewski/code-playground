import { useTypedSelector } from "../hooks/useTypedSelector";
import "./preview.css";

const Preview: React.FC = () => {
  const { error, data } = useTypedSelector((state) => state.cells);

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
    ${data.html.content}
    <script>
    ${data.javascript.content}
    </script>
  </body>
  </html>
  `;

  return (
    <div className='preview-wrapper'>
      <iframe
        srcDoc={htmlToInject}
        title='preview-window'
        sandbox='allow-scripts allow-modals'
      />
      {error && (
        <div className='preview-error'>
          <h1>Bundling error</h1>

          <p>{error.replace("index.js", "users code")}</p>
        </div>
      )}
    </div>
  );
};

export default Preview;
