import { NavigationContainer } from "@react-navigation/native";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import Edit from "../screens/Edit";
import Home from "../screens/Home";

export type RootStackParamList = {
    Home: undefined;
    Edit: { pilot: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
    const { theme } = useTheme();

    const screenOptions: NativeStackNavigationOptions = {
        headerStyle: {
            backgroundColor: theme.surface,
        },
        headerTitleStyle: {
            color: theme.text.primary,
        },
        headerShadowVisible: true,
        headerTintColor: theme.text.primary,
        animation: "fade_from_bottom",
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name={"Home"}
                    component={Home}
                    options={{
                        title: "Resultados",
                    }}
                />
                <Stack.Screen
                    name={"Edit"}
                    component={Edit}
                    options={{
                        title: "Editar Resultados",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
