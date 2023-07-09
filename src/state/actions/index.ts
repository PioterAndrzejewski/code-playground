import { ActionType } from "../action-types";
import { Cell } from "../cellTypes";

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    type: string;
    content: string;
  };
}

export interface CellsState {
  loading: boolean;
  error: string | null;
  data: {
    [key: string]: Cell;
  };
}

export interface LoadCellsAction {
  type: ActionType.LOAD_CELLS;
  payload: CellsState;
}

export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {};
}

export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    bundle: {
      code: string;
      err: string;
    };
  };
}

export type Action =
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction
  | LoadCellsAction;
