import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../modules";
import displayMode from "../modules/displayMode";

function useThemeEffect() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.displayMode.theme);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        dispatch(
            displayMode.actions.setSystemTheme(systemPrefersDark ? "dark" : "light"),
        );
    }, [dispatch]);

    useEffect(() => {
        if (theme !== "default") {
            document.body.dataset.theme = theme;
        }
    }, [theme]);
}

export default useThemeEffect;
