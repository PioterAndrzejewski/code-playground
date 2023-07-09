import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { UpdateCellAction, LoadCellsAction } from "../actions";
import { Action } from "../actions";
import { CellsState } from "../cellTypes";
import bundle from "../../bundler";

export const updateCell = (type: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      type,
      content,
    },
  };
};

export const loadCells = (loadedState: {
  cells: CellsState;
}): LoadCellsAction => {
  return {
    type: ActionType.LOAD_CELLS,
    payload: loadedState,
  };
};

export const createBundle = (input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {},
    });
    const result = await bundle(input);
    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        bundle: result,
      },
    });
  };
};
