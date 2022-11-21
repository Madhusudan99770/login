import React from 'react'
import Navbar from '../pages/Navbar'
import Sidebar from '../pages/Sidebar'
import "../App.css"
import Dashboard from '../side/Dashboard'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>  
      
    </div>
  )
}

export default Home;

