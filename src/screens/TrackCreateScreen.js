import React, { useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import Spacer from "../components/Spacer";
import {
    requestForegroundPermissionsAsync,
    watchPositionAsync,
    Accuracy,
} from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation,
    } = useContext(LocationContext);
    const callback = useCallback(
        (location) => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [error] = useLocation(isFocused || recording, callback);

    return (
        <View style={styles.container}>
            <Map />
            {error ? (
                <Text style={styles.errorMessage}>
                    Please enable location services
                </Text>
            ) : null}
            <TrackForm />
        </View>
    );
};

TrackCreateScreen.navigationOptions = {
    title: "Add track",
    tabBarIcon: <MaterialIcons name="add" size={24} color="#282828" />,
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    errorMessage: {
        fontSize: 16,
        color: "red",
    },
});
