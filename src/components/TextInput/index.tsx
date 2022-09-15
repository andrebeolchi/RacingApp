import React from "react";
import { TextInput as RNTextInput } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export default function TextInput({ value, onChangeText }) {
    const { theme } = useTheme();

    return (
        <RNTextInput
            style={{
                backgroundColor: theme.surface3,
                padding: 8,
                borderRadius: 8,
                color: theme.text.primary,
                marginBottom: 8,
            }}
            value={value}
            onChangeText={onChangeText}
        />
    );
}
