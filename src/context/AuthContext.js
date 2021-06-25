import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import api from "../api/tracker";
import { navigate } from "../helpers/navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signup":
            return { token: action.payload, errorMessage: "" };
        case "signin":
            return { token: action.payload, errorMessage: "" };
        case "signout":
            return { token: null, errorMessage: "" };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

/**
 * @description check if token exists in local storage
 * @param {*} dispatch
 * @returns
 */
const tryLocalSignIn = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({ type: "signin", token });
        navigate("TrackList", {});
    } else {
        navigate("loginFlow", {});
    }
};

/**
 * @description clears errorMessage on state
 * @param {*} dipatch
 * @returns
 */
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};

/**
 * @description Sign up
 * @param {*} dispatch
 * @returns
 */
const signUp =
    (dispatch) =>
    async ({ email, password }) => {
        try {
            const response = await api.post("/signup", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signup", payload: response.data.token });
            navigate("TrackList", {});
        } catch (error) {
            dispatch({
                type: "add_error",
                payload: error.response.data.message,
            });
        }
    };

/**
 * @description Sign in
 * @param {*} dispatch
 * @returns
 */
const signIn =
    (dispatch) =>
    async ({ email, password }) => {
        try {
            const response = await api.post("/signin", { email, password });
            await AsyncStorage.setItem("token", response.data.token);
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList", {});
        } catch (error) {
            dispatch({
                type: "add_error",
                payload: error.response.data.message,
            });
        }
    };

/**
 * @description Sign out
 * @param {*} dispatch
 * @returns
 */
const signOut = (dispatch) => async () => {
    AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("loginFlow", {});
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: "" }
);
