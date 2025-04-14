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
        <Route path='/round1' element={<RoundOne />} />
        <Route path='/round1' element={<RoundTwo />} />
        <Route path='/round1' element={<RoundThree />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App