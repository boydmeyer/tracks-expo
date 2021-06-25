import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam("_id");

    const track = state.find((t) => t._id === _id);
    const inititalCoords = track.locations[0].coords;
    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...inititalCoords,
                }}
            >
                <Polyline
                    coordinates={track.locations.map((loc) => loc.coords)}
                />
            </MapView>
            <Spacer>
                <Text h3>{track.title}</Text>
            </Spacer>
        </View>
    );
};

TrackDetailScreen.navigationOptions = {
    title: " ",
};

export default TrackDetailScreen;

const styles = StyleSheet.create({ map: { height: 400 } });
