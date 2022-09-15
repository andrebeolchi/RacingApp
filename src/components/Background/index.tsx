import React from "react";
import { View } from "react-native";
import { useTheme } from "../../hooks/useTheme";

/**
 * Component to render the background of the app.
 *
 * @returns {JSX.Element} Background
 * @example
 * import { Background } from "./components/Background";
 *
 * export default function App() {
 *  return (
 *      <Background>
 *        <Text> Hello World </Text>
 *      </Background>
 * );
 */
export default function Background({ children }: any): JSX.Element {
    const { theme } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.background,
            }}
        >
            {children}
        </View>
    );
}
