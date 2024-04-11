import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Setting = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='ml-80 p-6'>
        Setting
      </div>
    </div>
  )
}

export default Setting