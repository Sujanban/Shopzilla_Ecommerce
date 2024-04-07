import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Error = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <div className='ml-80 p-6'>
                404 Page Not Found
            </div>
        </div>
    )
}

export default Error