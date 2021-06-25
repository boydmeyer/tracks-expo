import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const SignUpScreen = ({ navigation }) => {
    const { state, signUp, clearErrorMessage } = useContext(AuthContext);

    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <View style={styles.container}>
                <AuthForm
                    title="Sign up"
                    errorMessage={state.errorMessage}
                    onSubmit={signUp}
                    submitButtonText="Sign up"
                />
                <Spacer>
                    <Button
                        title="Already have an account? Sign in"
                        type="clear"
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </Spacer>
            </View>
        </>
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
});
