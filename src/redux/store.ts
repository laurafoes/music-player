import { configureStore } from "@reduxjs/toolkit";
import sliceToken from "./sliceToken";

const store = configureStore({
    reducer: {
        token: sliceToken,
    }
})

export default store