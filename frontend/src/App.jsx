import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen flex items-center p-5 bg-gradient-to-r from-[#2C2A3C] to-[#0B7565]'>
      <div className='rounded-lg shadow-lg p-8 w-full h-[95%] '>
        <h2 className='text-7xl font-source-code font-extrabold text-white'>INNOVARIUM EVENT: CODING</h2>
        <div className='mt-10 flex gap-5' >
          <button className='flex items-center gap-2 bg-white/50 text-black font-source-code font-bold text-2xl py-3 px-5 rounded-lg hover:bg-white/80 transition duration-300 cursor-pointer'>
            <img src="folder.png" alt="folder_icon" />
            <span>Round 1</span>
          </button>
          <button className='flex items-center gap-2 bg-white/50 text-black font-source-code font-bold text-2xl py-3 px-5 rounded-lg hover:bg-white/80 transition duration-300 cursor-pointer'>
            <img src="folder.png" alt="folder_icon" />
            <span>Round 2</span>
          </button>
          <button className='flex items-center gap-2 bg-white/50 text-black font-source-code font-bold text-2xl py-3 px-5 rounded-lg hover:bg-white/80 transition duration-300 cursor-pointer'>
            <img src="folder.png" alt="folder_icon" />
            <span>Round 3</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App