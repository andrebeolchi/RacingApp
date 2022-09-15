import { StatusBar, Text } from "react-native";
import ThemeProvider from "./src/context/theme";

export default function App() {
    return (
        <ThemeProvider>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar />
        </ThemeProvider>
    );
}
