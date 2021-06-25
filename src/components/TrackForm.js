import React, { useContext } from "react";
import { StyleSheet } from "react-native";
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
        <>
            <Input label="Title" onChangeText={changeTitle} value={title} />
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
        </>
    );
};

export default TrackForm;

const styles = StyleSheet.create({});
