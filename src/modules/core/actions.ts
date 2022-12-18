import { deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

export const SET_LAYER = "core/SET_LAYER";
export const OPEN_POPUP = "core/OPEN_POPUP";
export const CLOSE_POPUP = "core/CLOSE_POPUP";

export const setLayer = createStandardAction(SET_LAYER)<boolean>();
export const openPopup = createStandardAction(OPEN_POPUP)<{
    title?: string;
    message: string;
}>();
export const closePopup = createStandardAction(CLOSE_POPUP)();
