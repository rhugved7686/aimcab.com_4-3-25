import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getTripPrice = createAsyncThunk(
    "getTripPrice", async ({pickup, drop, tripType})=>{
        const geocoder = new window.google.maps.Geocoder();
        let a ="";
        let b = "";
        geocoder.geocode({address: pickup}, (result ,status)=>{
            a = result;
        })

        geocoder.geocode({address: pickup}, (result ,status)=>{
            b = result;
        })

        console.log(a,b);
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