import { CellsState } from "../cellTypes";

export const saveToLS = (state: CellsState) => {
  localStorage.setItem("code-playground-store", JSON.stringify(state));
};
