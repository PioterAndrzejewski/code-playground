import { useEffect, useState } from "react";
import { Resizable, ResizableProps } from "re-resizable";
import "./resizable.css";

interface ResizableBoxProps {
  direction: "horizontal" | "vertical";
  children: JSX.Element;
}

const ResizableBox: React.FC<ResizableBoxProps> = ({ direction, children }) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div",
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay",
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  let resizableProps: ResizableProps = {};
  if (direction === "horizontal") {
    resizableProps = {
      enable: {
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      },
      className: "resize-horizontal",
      maxWidth: "40%",
      defaultSize: {
        width: "33%",
        height: "100%",
      },
    };
  }

  if (direction === "vertical") {
    resizableProps = {
      enable: {
        top: false,
        right: false,
        bottom: true,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      },
      className: "resize-horizontal",
      handleClasses: {
        bottom: "resize-handle",
      },
      minHeight: 100,
      maxHeight: "70vh",
    };
  }

  return <Resizable {...resizableProps}>{children}</Resizable>;
};

export default ResizableBox;
