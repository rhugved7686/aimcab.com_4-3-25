'use client'

import React from 'react'
import Navbar from '../../container/component/Navbar';
import Footer from '../../container/component/Footer';
import Index from '../HomePage/Index.jsx';


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