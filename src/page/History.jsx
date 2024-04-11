import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const History = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='ml-80 p-6'>
        History
      </div>
    </div>
  )
}

export default History