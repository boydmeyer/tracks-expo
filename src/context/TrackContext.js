import createDataContext from "./createDataContext";
import api from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case "fetch_tracks":
            return action.payload;
        default:
            state;
    }
};

const fetchTracks = (dispatch) => async () => {
    const response = await api.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data.tracks });
};

const createTrack = (dispatch) => async (title, locations) => {
    const response = await api.post("/tracks", { title, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack,
    },
    []
);
