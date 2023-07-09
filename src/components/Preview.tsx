import "./preview.css";

interface PreviewProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  error: string;
}

const Preview: React.FC<PreviewProps> = ({
  htmlCode,
  cssCode,
  jsCode,
  error,
}) => {
  const htmlToInject = `
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script>
    ${jsCode}
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
