import { configureStore } from "@reduxjs/toolkit";
import sliceArtist from "./sliceArtist";
import sliceToken from "./sliceToken";
import sliceTracks from "./sliceTracks";

const store = configureStore({
    reducer: {
        token: sliceToken,
        artists: sliceArtist,
        tracks: sliceTracks,
    }
})

export default store