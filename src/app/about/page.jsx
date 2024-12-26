'use client'
import { getTripPrice } from '../../store/TripSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const About = () => {
  const state = useSelector(state => state.trip);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(state);
    if(state.trip){
      console.log(state.trip);
      dispatch(getTripPrice({pickup:state.trip.user_pickup, drop:state.trip.user_drop, tripType:state.trip.user_trip_type}));
    }
  },[state])

  return (
    <div>
      About
    </div>
  )
}

export default About