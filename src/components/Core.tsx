import React from "react";
import { connect } from "react-redux";
import useThemeEffect from "../lib/useThemeEffect";
import OpaqueLayer from "./OpaqueLayer";
import CommonPopup from "./CommonPopup";
import GlobalStyles from "../GlobalStyles";
import { RootState } from "../modules";

interface OwnProps {}
interface StateProps {
    layer: boolean;
}
interface DispatchProps {}

type CoreProps = OwnProps & StateProps & DispatchProps;

function Core({ layer }: CoreProps) {
    useThemeEffect();

    return (
        <>
            <OpaqueLayer visible={layer} />
            <CommonPopup />
            <GlobalStyles />
        </>
    );
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
    (state) => ({
        layer: state.core.layer,
    }),
)(Core);
