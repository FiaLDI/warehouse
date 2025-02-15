import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sortView } from "./types";

interface authState {
    sort: keyof sortView | null;
    filters: string;
}

const initialState: authState = {
    sort: null,
    filters: ""
};

const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<keyof sortView>) {
            state.sort = action.payload;
        },
        setFilters(state, action: PayloadAction<string>) {
            state.filters = action.payload;
        },
    },
});

export const { setSort, setFilters } = productSlice.actions;

export default productSlice.reducer;
