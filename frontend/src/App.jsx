import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/round1' element={<div>Round 1</div>} />
        <Route path='/round1' element={<div>Round 1</div>} />
        <Route path='/round1' element={<div>Round 1</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App