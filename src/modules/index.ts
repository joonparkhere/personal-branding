import { combineReducers } from "redux";
import { CoreState } from "./core";
import header, { HeaderState } from "./header";
import error, { ErrorState } from "./error";
import displayMode, { DisplayModeState } from "./displayMode";
import core from "./core/reducer";

export type RootState = {
    core: CoreState;
    header: HeaderState;
    error: ErrorState;
    displayMode: DisplayModeState;
};

const rootReducer = combineReducers({
    core,
    header: header.reducer,
    error: error.reducer,
    displayMode: displayMode.reducer,
});

export default rootReducer;
