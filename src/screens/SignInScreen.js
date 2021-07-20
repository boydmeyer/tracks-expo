import React, { useContext } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Button } from "react-native-elements";
import SignInForm from "../components/SignInForm";

import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const SignInScreen = ({ navigation }) => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <ImageBackground
                source={{
                    uri: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
                }}
                style={styles.image}
            >
                <View style={styles.form}>
                    <SignInForm
                        errorMessage={state.errorMessage}
                        onSubmit={signIn}
                    />
                    <Spacer>
                        <Button
                            title="Already have an account? Sign in"
                            type="clear"
                            onPress={() => navigation.navigate("SignUp")}
                        />
                    </Spacer>
                </View>
            </ImageBackground>
        </View>
    );
};
SignInScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    form: {
        backgroundColor: "white",
        margin: 20,
        padding: 20,
        elevation: 8,
        borderRadius: 8,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
});
