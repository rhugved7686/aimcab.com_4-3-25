import { createSlice } from "@reduxjs/toolkit";

const TripSlice = createSlice({
    name:"Trip",
    initialState:{},
    reducers:{
        addTripDetails: (state, action)=>{
            state.trip = action.payload
        }

    }
})


export default TripSlice.reducer;
export const {addTripDetails} = TripSlice.actions;