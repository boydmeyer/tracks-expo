import React, { useContext } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import SignUpForm from "../components/SignUpForm";
import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const SignUpScreen = ({ navigation }) => {
    const { state, signUp, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <ImageBackground
                source={{
                    uri: "https://images.unsplash.com/photo-1511512013281-aab957553e75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
                }}
                style={styles.image}
            >
                <View style={styles.form}>
                    <SignUpForm
                        title="Sign up"
                        errorMessage={state.errorMessage}
                        onSubmit={signUp}
                    />
                    <Spacer>
                        <Button
                            title="Already have an account? Sign in"
                            type="clear"
                            onPress={() => navigation.navigate("SignIn")}
                        />
                    </Spacer>
                </View>
            </ImageBackground>
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    form: {
        backgroundColor: "#ffffff",
        margin: 20,
        padding: 20,
        elevation: 20,
        borderRadius: 8,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});
