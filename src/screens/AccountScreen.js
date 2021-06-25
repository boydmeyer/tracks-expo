import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context } from "../context/AuthContext";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const AccountScreen = () => {
    const { signOut } = useContext(Context);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Spacer>
                <Text h2>Account</Text>
            </Spacer>
            <Spacer>
                <Button title="Sign out" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <MaterialIcons name="settings" size={24} color="#282828" />,
};

export default AccountScreen;

const styles = StyleSheet.create({});
