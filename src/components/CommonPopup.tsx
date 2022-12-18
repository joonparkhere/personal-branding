import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { closePopup } from "../modules/core";
import CancellablePopup from "./CancellablePopup";

interface CommonPopupProps {}

function CommonPopup(props: CommonPopupProps) {
    const popup = useSelector((state: RootState) => state.core.popup);
    const dispatch = useDispatch();
    const onConfirm = () => {
        dispatch(closePopup());
    };

    return (
        <CancellablePopup
            title={popup.title}
            visible={popup.visible}
            onConfirm={onConfirm}
        >
            {popup.message}
        </CancellablePopup>
    );
}

export default CommonPopup;
