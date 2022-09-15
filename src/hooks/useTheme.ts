import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { ThemeContextProps } from "../context/theme/types";

/**
 * This hook is used to get the current theme and/or toggle between light and dark mode.
 * @returns {ThemeContextProps} The current theme and a function to toggle between light and dark mode.
 * @example
 * const { theme, toggleTheme } = useTheme();
 */

export const useTheme = (): ThemeContextProps => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return { theme, toggleTheme };
};
