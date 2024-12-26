import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getTripPrice = createAsyncThunk(
    "getTripPrice", async (data) => {
        console.log(data);
        try {
            const data2 = await axios.post("/api/prices", data);

            console.log(data2);
            return "not found";

        } catch (error) {
            console.log(error)
        }
    }
)



const TripSlice = createSlice({
    name: "Trip",
    initialState: {},
    reducers: {
        addTripDetails: (state, action) => {
            state.trip = action.payload;
        },
        totalDistance: (state, action) => {
            state.distance = action.payload;
        },
        updatePickupCity: (state, action) => {
            state.trip = { ...state.trip, pickupCity: action.payload }
        },
        updateDropCity: (state, action) => {
            state.trip = { ...state.trip, dripCity: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTripPrice.fulfilled, (state, action) => {
            console.log("here is trip prices");
        })
    }
})


export default TripSlice.reducer;
export const { addTripDetails, totalDistance, updatePickupCity, updateDropCity } = TripSlice.actions;