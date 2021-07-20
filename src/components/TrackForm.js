import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {
        state: { title, recording, locations },
        startRecording,
        stopRecording,
        changeTitle,
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3 style={styles.title}>
                    Create a track
                </Text>
            </Spacer>
            <Input label="Title" onChangeText={changeTitle} value={title} />
            <Input
                label="Description"
                // onChangeText={changeDescription}
                // value={description}
            />
            <Spacer>
                {recording ? (
                    <Button
                        title="Stop"
                        onPress={stopRecording}
                        buttonStyle={{ backgroundColor: "rgb(255,100,100)" }}
                    />
                ) : (
                    <Button title="Record" onPress={startRecording} />
                )}
            </Spacer>
            {!recording && locations.length ? (
                <Spacer>
                    <Button onPress={saveTrack} type="outline" title="Save" />
                </Spacer>
            ) : null}
        </View>
    );
};

export default TrackForm;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        // elevation: 20,
        // backgroundColor: "white",
    },
    title: {
        fontWeight: "bold",
        color: "#282828",
        marginBottom: 16,
    },
});
