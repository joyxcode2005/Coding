import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RoundOne from './pages/RoundOne'
import RoundTwo from './pages/RoundTwo'
import RoundThree from './pages/RoundThree'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/easy' element={<RoundOne />} />
        <Route path='/medium' element={<RoundTwo />} />
        <Route path='/hard' element={<RoundThree />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App