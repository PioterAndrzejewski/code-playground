import { CellsState } from "../cellTypes";

export const saveToLS = (state: CellsState) => {
  localStorage.setItem("cellsStore", JSON.stringify(state));
};
