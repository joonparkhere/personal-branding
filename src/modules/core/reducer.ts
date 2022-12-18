import { createReducer } from "typesafe-actions";
import produce from "immer";
import { CoreAction, CoreState } from "./types";
import { CLOSE_POPUP, OPEN_POPUP, SET_LAYER } from "./actions";

const initialState: CoreState = {
    layer: false,
    popup: {
        visible: false,
        title: "",
        message: "",
    },
};

const core = createReducer<CoreState, CoreAction>(initialState, {
    [SET_LAYER]: (state, action) => ({
        ...state,
        layer: action.payload,
    }),
    [OPEN_POPUP]: (state, action) => produce(state, (draft) => {
        draft.popup.visible = true;
        draft.popup.title = action.payload.title;
        draft.popup.message = action.payload.message;
    }),
    [CLOSE_POPUP]: (state) => produce(state, (draft) => {
        draft.popup.visible = false;
    }),
});

export default core;
