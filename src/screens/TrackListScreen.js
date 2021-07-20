import React, { useContext } from "react";
import {
    StyleSheet,
    View,
    Button,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
    const { fetchTracks, state } = useContext(TrackContext);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("TrackDetail", {
                                    _id: item._id,
                                })
                            }
                        >
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>
                                        {item.title}
                                    </ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
TrackListScreen.navigationOptions = {
    title: "My tracks",
};
export default TrackListScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8F8FC" },
});
