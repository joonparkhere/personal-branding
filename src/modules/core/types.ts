import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CoreAction = ActionType<typeof actions>;

export type CoreState = {
    layer: boolean;
    popup: {
        visible: boolean;
        title: string | undefined;
        message: string;
    };
};
