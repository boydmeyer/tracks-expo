import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext);

    /**
     * Check if user is signed in
     */
    useEffect(() => {
        tryLocalSignIn();
    }, []);

    return null;
};

ResolveAuthScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default ResolveAuthScreen;
