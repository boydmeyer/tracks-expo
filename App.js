/**
 * React Native
 */
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * Context
 */
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

/**
 * Screens
 */
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

/**
 * Navigators
 */
import { setNavigator } from "./src/helpers/navigationRef";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

/**
 * App Navigator
 */
const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
    title: "My tracks",
    tabBarIcon: <MaterialIcons name="map" size={24} color="#282828" />,
};

const switchNavigator = createSwitchNavigator({
    Index: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        SignUp: SignUpScreen,
        SignIn: SignInScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);

/**
 * Export App
 */

export default () => {
    return (
        <LocationProvider>
            <TrackProvider>
                <AuthProvider>
                    <App ref={(navigator) => setNavigator(navigator)} />
                </AuthProvider>
            </TrackProvider>
        </LocationProvider>
    );
};
