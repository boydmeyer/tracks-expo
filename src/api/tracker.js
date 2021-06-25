import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * trackerApi
 */
const instance = axios.create({
    baseURL: "http://47d78ad6c0f5.ngrok.io",
});

/**
 * Send token if in storage
 */
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
