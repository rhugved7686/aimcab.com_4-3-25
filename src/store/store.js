import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./TripSlice"


export const store = configureStore({
    reducer:{
        trip: tripReducer
    }
})