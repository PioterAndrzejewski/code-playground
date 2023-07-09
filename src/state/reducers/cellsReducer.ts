import { produce } from "immer";
import { Action } from "../actions";
import { CellsState } from "../cellTypes";
import { ActionType } from "../action-types";
import { saveToLS } from "../utils/saveToLS";

const initialState: CellsState = {
  loading: false,
  error: null,
  data: {
    html: {
      type: "html",
      content: `<p class="text">There is always div with id Root in the beginning of HTML file</p>`,
    },
    css: {
      type: "css",
      content: `.text {
        display: block;
        text-align: center;
        border: 1px solid black;
        margin: 0 50px;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 8px 8px 14px #b19b9b5b;
    }
    
    .heading {
        margin-top: 50px;
        text-align: center;
        font-family: Arial, sans-sefir;
    }`,
    },
    javascript: {
      type: "javascript",
      content: `import ReactDOM from 'react-dom';

      const App = () => <h1 className="heading">Hello world!</h1>
            
      ReactDOM.render(<App />, document.querySelector("#root"));`,
    },
  },
  bundle: {
    code: "",
    err: "",
  },
};

const cellsReducer = produce(
  (state: CellsState = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.LOAD_CELLS:
        if (action.payload) {
          return action.payload;
        }
        return state;
      case ActionType.UPDATE_CELL:
        const { type, content } = action.payload;
        state.data[type].content = content;
        saveToLS(state);
        return state;
      case ActionType.BUNDLE_START:
        state = {
          ...state,
          loading: true,
          error: null,
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state = {
          ...state,
          loading: false,
          bundle: action.payload.bundle,
        };
        return state;
      default:
        return state;
    }
  },
  initialState,
);

export default cellsReducer;
