import { useSelector } from "react-redux";
import { RootState } from "../modules";

function useTheme() {
    const displayModeState = useSelector((state: RootState) => state.displayMode);
    return (() => {
        if (displayModeState.systemTheme === "not-ready") return "light";
        if (displayModeState.theme !== "default") return displayModeState.theme;
        return displayModeState.systemTheme;
    })();
}

export default useTheme;
