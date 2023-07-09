import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { fetchPlugin } from "./plugins/fetch-plugin";

let service: any;
let serviceIsCalled = false;

const bundleCode = async (rawCode: string) => {
  if (!service && !serviceIsCalled) {
    serviceIsCalled = true;
    service = await esbuild.initialize({
      wasmURL: "https://unpkg.com/esbuild-wasm@0.18.11/esbuild.wasm",
      worker: true,
    });
  }
  try {
    const bundle = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: '"window"',
      },
      jsxFactory: "_React.createElement",
      jsxFragment: "_React.Fragment",
    });
    return { code: bundle.outputFiles[0].text, err: "" };
  } catch (err) {
    if (err instanceof Error) {
      return { code: "", err: err.message };
    } else {
      throw err;
    }
  }
};

export default bundleCode;
