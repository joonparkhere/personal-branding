import { createGlobalStyle } from "styled-components";
import React, { useMemo } from "react";
import { matchPath, useLocation } from "react-router";
import { themedPalette } from "../lib/themes";

const GrayBackground = createGlobalStyle`
    body {
        background: ${themedPalette.bg_page1};
    }
`;

const WhiteBackground = createGlobalStyle`
    body {
        background: ${themedPalette.bg_page2};
    }
`;

interface ConditionalBackgroundProps {}

function ConditionalBackground(props: ConditionalBackgroundProps) {
    const location = useLocation();
    const isGray = useMemo(() => (
        [{ path: "/", exact: true }].some(
            (path) => matchPath(location.pathname, path),
        )
    ), [location]);

    return isGray ? <GrayBackground /> : <WhiteBackground />;
}

export default ConditionalBackground;
