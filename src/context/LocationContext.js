import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_location":
            return {
                ...state,
                locations: [...state.locations, action.payload],
            };
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        case "start_recording":
            return { ...state, recording: true };
        case "stop_recording":
            return { ...state, recording: false };
        case "change_title":
            return { ...state, title: action.payload };
        case "reset":
            return {
                ...state,
                title: "",
                locations: [],
            };
        default:
            return state;
    }
};

/**
 *
 * @param {*} dispatch
 */
const reset = (dispatch) => () => {
    dispatch({ type: "reset" });
};

/**
 *
 * @param {*} dispatch
 * @returns
 */
const changeTitle = (dispatch) => (title) => {
    dispatch({ type: "change_title", payload: title });
};

/**
 * @description Starts recording locations
 * @param {*} dispatch
 * @returns
 */
const startRecording = (dispatch) => () => {
    dispatch({ type: "start_recording" });
};

/**
 * @description Stops recording locations
 * @param {*} dispatch
 * @returns
 */
const stopRecording = (dispatch) => () => {
    dispatch({ type: "stop_recording" });
};

/**
 * @description adds new location
 * @param {*} dispatch
 * @returns
 */
const addLocation = (dispatch) => (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
        dispatch({ type: "add_location", payload: location });
    }
};

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeTitle, reset },
    { title: "", recording: false, locations: [], currentLocation: null }
);
