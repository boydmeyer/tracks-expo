import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
    const {
        state: { currentLocation, locations },
    } = useContext(LocationContext);

    if (!currentLocation) return <ActivityIndicator size="large" />;

    return (
        <MapView
            showsUserLocation={true}
            userLocationPriority="high"
            userLocationUpdateInterval={1000}
            showsMyLocationButton={true}
            showsCompass={true}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            style={styles.map}
        >
            <Polyline
                strokeWidth={6}
                lineCap="round"
                lineJoin="round"
                geodesic={true}
                strokeColor={"rgba(31,117,234,0.8)"}
                coordinates={locations.map((loc) => loc.coords)}
            />
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({
    map: {
        height: 400,
    },
    title: {},
});
