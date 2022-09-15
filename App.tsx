import { StatusBar } from "react-native";
import ThemeProvider from "./src/context/theme";
import MainNavigator from "./src/navigators";

export default function App() {
    return (
        <ThemeProvider>
            <MainNavigator />
            <StatusBar />
        </ThemeProvider>
    );
}
