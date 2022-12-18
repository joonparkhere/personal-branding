import { createSlice } from "@reduxjs/toolkit";

export interface HeaderState {
    custom: boolean;
}

const initialState: HeaderState = {
    custom: false,
};

const header = createSlice({
    name: "header",
    initialState,
    reducers: {
        enter(state) {
            state.custom = true;
        },
        leave(state) {
            state.custom = false;
        },
    },
});

export default header;
