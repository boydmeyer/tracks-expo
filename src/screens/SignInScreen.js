import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

import Spacer from "../components/Spacer";
import { NavigationEvents } from "react-navigation";

const SignInScreen = ({ navigation }) => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext);
    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <View style={styles.container}>
                <AuthForm
                    title="Sign in"
                    errorMessage={state.errorMessage}
                    onSubmit={signIn}
                    submitButtonText="Sign in"
                />
                <Spacer>
                    <Button
                        title="Already have an account? Sign in"
                        type="clear"
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </Spacer>
            </View>
        </>
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
});
