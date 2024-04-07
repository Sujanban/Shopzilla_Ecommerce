import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdPassword } from "react-icons/md";
import "../App.css"
import Navbar from "../components/Navbar.jsx";

const Login = () => {
    return (
        <div>
            <div className='grid'>
                <NavLink to="/" className="absolute text-xl text-[#1FAEC5] font-bold pl-20 p-4  flex items-center">
                    <img className='pr-2' src={logo} alt="" />
                    <span className="">Shopzilla</span>
                </NavLink>

                <Navbar />
            </div>
            <div className='login-container w-full h-screen bg-gray-50'>
                <div className=' flex items-center justify-center py-12 m-auto sm:w-[360px] '>
                    <div className=' w-full'>
                        <form action="">
                            <h1 className='px-4 text-2xl text-slate-900 font-medium'>Welcome to Shopzilla,</h1>
                            <p className='px-4 pb-4 text-2xl text-slate-900 font-medium'>Sign In to Continue.</p>
                            <div className='p-2 '>
                                <div className='px-3 bg-white flex items-center  border rounded-md border-slate-400'>
                                    <HiOutlineEnvelope size={20} className=' text-gray-500 font-md' />
                                    <input className='bg-transparent text-sm focus:outline-none w-full p-3' type="email" placeholder='Email address' />
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='px-3 bg-white flex items-center  border rounded-md border-slate-400'>
                                    <MdPassword size={20} className=' text-gray-500 font-md' />
                                    <input className='text-sm focus:outline-none w-full p-3' type="email" placeholder='Password' />
                                </div>
                            </div>
                            <div className='p-2 text-xs text-right'>
                                <Link className='underline' to="">Forgot Password?</Link>
                            </div>
                            <div className='p-2 pt-4'>
                                <button className='rounded-full text-sm bg-stone-900 text-white p-3 w-full'>Login</button>
                            </div>
                        </form>
                        <div className='py-4 text-xs flex items-center justify-center gap-2 text-stone-600'><hr className=' flex-grow' />OR<hr className='flex-grow' /></div>
                        <div className='text-sm'>
                            <p className='text-center text-xs'>Dont have an account ?</p>
                            <div className='p-2 pt-4'>
                                <Link to="/register" className='flex items-center justify-center rounded-full outline outline-stone-900 hover:bg-stone-900 hover:text-white p-3 w-full'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login