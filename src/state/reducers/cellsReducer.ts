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
      content: "<div>Hello world</div>",
    },
    css: {
      type: "css",
      content: "div {background-color: #aaa}",
    },
    javascript: {
      type: "javascript",
      content: "console.log('it works')",
    },
  },
  bundle: null,
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
          bundle: action.payload.bundle.code,
        };
        return state;
      default:
        return state;
    }
  },
  initialState,
);

export default cellsReducer;
