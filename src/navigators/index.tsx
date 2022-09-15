import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Edit from "../screens/Edit";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
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
