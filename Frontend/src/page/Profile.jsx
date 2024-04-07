import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div>
        <Sidebar/>
        <Navbar/>
        <div className='ml-80 p-6'>
          Profile
        </div>
    </div>
  )
}

export default Profile