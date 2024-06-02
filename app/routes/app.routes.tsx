import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "@/app/pages/home";
import { Welcome } from "@/app/pages/welcome";
import { Detail } from "@/app/pages/detail";
const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}

