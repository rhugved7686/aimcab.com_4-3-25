'use client'

import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Index from '../Index';
import { Provider } from 'react-redux';
import { store } from "../../store/store";

const Home = () => {
  return (
    <>
     <Navbar/>
     <Index/>
     <Footer /> 
    </>
  )
}

export default Home;