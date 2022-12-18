import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DisplayModeState = {
    theme: "dark" | "light" | "default";
    systemTheme: "dark" | "light" | "not-ready";
};

const initialState: DisplayModeState = {
    theme: "default",
    systemTheme: "not-ready",
};

const displayMode = createSlice({
    name: "displayMode",
    initialState,
    reducers: {
        enableDarkMode(state) {
            state.theme = "dark";
        },
        enableLightMode(state) {
            state.theme = "light";
        },
        setSystemTheme(state, action: PayloadAction<"dark" | "light">) {
            state.systemTheme = action.payload;
        },
    },
});

export default displayMode;
