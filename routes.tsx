import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import { Home } from './screens/Home';
import { Favorites } from "./screens/Favorites";


export type RootStackParamList = {
    Home: {animal: Animal},
    Favorites: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function Router({}) {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                component={Home}
                name="Home"
                initialParams={{animal: undefined}}
            />
            
            <Stack.Screen
                component={Favorites}
                name="Favorites"
                options={{headerShown: true}}
            />
        </Stack.Navigator>
    )
}
