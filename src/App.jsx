import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/components/Home'
import Navbar from '../pages/components/Navbar'
import Footer from '../pages/components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
