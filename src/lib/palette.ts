import { themedPalette } from "./themes";

const palette = {
    violet0: "#FBF3FF",
    violet1: "#E4BBF5",
    violet2: "#C77EE6",
    violet3: "#BA5FE1",
    violet4: "#AD41DB",
    violet5: "#9F27D2",
    violet6: "#9223C1",
    violet7: "#711C96",
    violet8: "#5B1678",
    violet9: "#44105A",

    gray0: "#F8F9FA",
    gray1: "#F1F3F5",
    gray2: "#E9ECEF",
    gray3: "#DEE2E6",
    gray4: "#CED4DA",
    gray5: "#ADB5BD",
    gray6: "#868E96",
    gray7: "#495057",
    gray8: "#343A40",
    gray9: "#212529",

    red0: "#fff5f5",
    red1: "#ffe3e3",
    red2: "#ffc9c9",
    red3: "#ffa8a8",
    red4: "#ff8787",
    red5: "#ff6b6b",
    red6: "#fa5252",
    red7: "#f03e3e",
    red8: "#e03131",
    red9: "#c92a2a",
};

export const buttonColorMap: {
    [color: string]: {
        background: string;
        color: string;
        hoverBackground: string;
    };
} = {
    violet: {
        background: palette.violet6,
        color: "white",
        hoverBackground: palette.violet5,
    },
    lightGray: {
        background: palette.gray2,
        color: palette.gray7,
        hoverBackground: palette.gray1,
    },
    gray: {
        background: palette.gray6,
        color: "white",
        hoverBackground: palette.gray5,
    },
    darkGray: {
        background: palette.gray8,
        color: "white",
        hoverBackground: palette.gray6,
    },
    transparent: {
        background: "none",
        color: palette.violet6,
        hoverBackground: palette.violet1,
    },
    red: {
        background: palette.red5,
        color: "white",
        hoverBackground: palette.red4,
    },
};

export default palette;
