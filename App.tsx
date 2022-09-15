import { StatusBar } from "react-native";
import QueryProvider from "./src/context/query";
import ThemeProvider from "./src/context/theme";
import MainNavigator from "./src/navigators";

export default function App() {
    return (
        <QueryProvider>
            <ThemeProvider>
                <MainNavigator />
                <StatusBar />
            </ThemeProvider>
        </QueryProvider>
    );
}
