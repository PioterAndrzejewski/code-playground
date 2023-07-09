import { Dispatch } from "react";
import { ActionType } from "../action-types";
import {
  UpdateCellAction,
  LoadCellsAction,
  BundleStartAction,
  BundleCompleteAction,
} from "../actions";
import { Action } from "../actions";
import { CellTypes, Cell, CellsState } from "../cellTypes";

export const updateCell = (type: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      type,
      content,
    },
  };
};

export const loadCells = (loadedState: CellsState): LoadCellsAction => {
  return {
    type: ActionType.LOAD_CELLS,
    payload: loadedState,
  };
};

// export const createBundle = (cellId: string, input: string) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.BUNDLE_START,
//       payload: {
//         id: cellId,
//       },
//     });
//     const result = await bundle(input);
//     dispatch({
//       type: ActionType.BUNDLE_COMPLETE,
//       payload: {
//         id: cellId,
//         bundle: result,
//       },
//     });
//   };
// };
