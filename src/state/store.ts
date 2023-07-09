import { configureStore } from "@reduxjs/toolkit";
import cellsReducer from "./reducers/cellsReducer";
import { CellsState } from "./cellTypes";

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
  },
});

export type RootState = {
  cells: CellsState;
};
