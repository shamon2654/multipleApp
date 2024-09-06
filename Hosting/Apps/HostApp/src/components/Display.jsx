import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "../../../HomeApp/src/App"
import From from "../../../FromApp/src/App"


const Display = () => {
  return (
    <div className="bg-gray-200 h-full">
      
        <Routes>
          <Route path="/home" element={<Home/> } />
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<From />} />
        </Routes>
      
    </div>
  )
}

export default Display
