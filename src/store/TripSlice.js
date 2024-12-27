import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const parseLocalStorage = ()=>{
    try {
        return JSON.parse(localStorage.getItem("trip"));
    } catch (error) {
        console.log(error);
    }
}

const initialState = {
    trip: typeof window !== 'undefined' && localStorage.getItem("trip") ? parseLocalStorage() : {},  // Get trip data from localStorage if available
    price: null, // Store the price in the state
    distance: null // Store the distance in the state
};



export const getTripPrice = createAsyncThunk(
    "getTripPrice", async (data) => {
        console.log(data);
        try {
            const data2 = await axios.post("/api/prices", data);

            console.log(data2.data.data);
            return data2.data.data;

        } catch (error) {
            console.log(error)
        }
    }
)



const TripSlice = createSlice({
    name: "Trip",
    initialState,
    reducers: {
        addTripDetails: (state, action) => {
            localStorage.setItem("trip", JSON.stringify(action.payload));
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