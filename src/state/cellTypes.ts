export type CellTypes = "html" | "css" | "javascript";

export interface Cell {
  type: CellTypes;
  content: string;
}

export interface CellsState {
  loading: boolean;
  error: string | null;
  data: {
    [key: string]: Cell;
  };
  bundle: string | null;
}
