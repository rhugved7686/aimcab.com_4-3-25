import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getTripPrice = createAsyncThunk(
    "getTripPrice", async ({pickup, drop, tripType})=>{
        console.log(pickup, drop, tripType)
    }
)



const TripSlice = createSlice({
    name:"Trip",
    initialState:{},
    reducers:{
        addTripDetails: (state, action)=>{
            state.trip = action.payload;
        },
        totalDistance: (state, action) =>{
            state.distance = action.payload;
        },
        updatePickupCity : (state, action)=>{
            state.trip = {...state.trip, pickupCity : action.payload}
        },
        updateDropCity : (state, action) =>{
            state.trip = {...state.trip, dripCity : action.payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getTripPrice.fulfilled, (state, action)=>{
            console.log("here is trip prices");
        })
    }
})


export default TripSlice.reducer;
export const {addTripDetails, totalDistance, updatePickupCity, updateDropCity} = TripSlice.actions;