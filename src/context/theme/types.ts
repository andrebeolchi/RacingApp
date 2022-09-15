import { ThemeType } from "../../theme/type";

export interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}