import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { SplashScreens } from '../screens/SplashScreens/SplashScreens';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="SplashScreens"
                component={SplashScreens}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    );
}