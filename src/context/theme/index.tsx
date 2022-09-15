import React from "react";
import { Theme } from "../../theme";
import { ThemeType } from "../../theme/type";
import { ProviderProps } from "../types";
import { ThemeContextProps } from "./types";

export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: Theme["Dark"],
    toggleTheme: () => {},
});

/**
 * Use to access the current theme or toggle the theme.
 * @param {ProviderProps} props
 * @returns {JSX.Element} ThemeProvider
 * @example
 * import { ThemeProvider } from "./context/theme";
 *
 * export default function App() {
 *  return (
 *      <ThemeProvider>
 *          <Navigator>
 *      </ThemeProvider>
 * );
 */
export default function ThemeProvider({
    children,
}: ProviderProps): JSX.Element {
    const [theme, setTheme] = React.useState<ThemeType>(Theme["Dark"]);

    const toggleTheme = () => {
        setTheme((theme) =>
            theme === Theme["Dark"] ? Theme["Light"] : Theme["Dark"]
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
