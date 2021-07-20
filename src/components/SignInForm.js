import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const SignInForm = ({ errorMessage, onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Spacer>
                <Text style={styles.title} h3>
                    Sign in
                </Text>
            </Spacer>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="E-mail"
                onChangeText={setEmail}
            />
            <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Password"
                onChangeText={setPassword}
            />
            <Spacer>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </Spacer>
            <Spacer>
                <Button
                    onPress={() => onSubmit({ email, password })}
                    title="Sign in"
                />
            </Spacer>
        </View>
    );
};

export default SignInForm;

const styles = StyleSheet.create({
    title: { marginBottom: 20 },
    errorMessage: {
        fontSize: 16,
        color: "red",
    },
});
