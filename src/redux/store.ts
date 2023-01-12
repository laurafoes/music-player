import { configureStore } from "@reduxjs/toolkit";
import sliceArtist from "./sliceArtist";
import sliceToken from "./sliceToken";

const store = configureStore({
    reducer: {
        token: sliceToken,
        artists: sliceArtist,
    }
})

export default store