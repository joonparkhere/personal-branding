import { useDispatch } from "react-redux";
import useTheme from "./useTheme";
import storage from "./storage";
import displayMode from "../modules/displayMode";

function useToggleTheme() {
    const dispatch = useDispatch();
    const theme = useTheme();

    const saveToStorage = (value: "light" | "dark") => {
        storage.setItem("theme", value);
        document.cookie = `theme=${value}; path=/;`;
    };

    const toggle = () => {
        if (!theme) return;
        if (theme === "dark") {
            dispatch(displayMode.actions.enableLightMode());
            saveToStorage("light");
        } else {
            dispatch(displayMode.actions.enableDarkMode());
            saveToStorage("dark");
        }
    };

    return [theme, toggle] as const;
}

export default useToggleTheme;
