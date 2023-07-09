import { useSelector, TypedUseSelectorHook } from "react-redux";
import { CellsState, RootState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
