import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import Text from "../Text";
import { ButtonProps } from "./types";

/**
 * A button component.
 * @param props The component props.
 * @returns The element to render.
 * @example
 * import { Button } from "./components/Button";
 *
 * export default function App() {
 *  return (
 *      <Button label="Press me" onPress={() => console.log("Pressed")} />
 *  );
 */
export default function Button(props: ButtonProps) {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.8}
            style={{
                backgroundColor: theme.primary,
                paddingVertical: 8,
                paddingHorizontal: 32,
                borderRadius: 5,
            }}
        >
            <Text bold>{props.label}</Text>
        </TouchableOpacity>
    );
}
