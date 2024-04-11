import React, { useContext, useState } from 'react'
import { MdHome, MdExplore, MdShoppingCart, MdOutlineHistory, MdAddCircleOutline, MdOutlineChatBubbleOutline, MdOutlineSettings, MdPeople } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";


import logo from "../assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import { HamContext } from '../context/HamContext';



const Sidebar = () => {

    const { toggle, toggleSidebar } = useContext(HamContext);

    const navbar = [
        {
            "id": "1",
            "to": "/",
            "name": "Home",
            Icon: MdHome
        },
        {
            "id": "2",
            "to": "/explore",
            "name": "Explore",
            Icon: MdExplore
        },
        {
            "id": "3",
            "to": "/saved",
            "name": "Saved",
            Icon: IoMdHeartEmpty
        },
        {
            "id": "4",
            "to": "/cart",
            "name": "Cart",
            Icon: MdShoppingCart
        }
        // {
        //     "id": "5",
        //     "to": "/profile",
        //     "name": "Profile",
        //     Icon: MdPeople
        // },
        // {
        //     "id": "6",
        //     "to": "/history",
        //     "name": "Purchase History",
        //     Icon: MdOutlineHistory
        // }, {
        //     "id": "7",
        //     "to": "/contact",
        //     "name": "Contact us",
        //     Icon: MdOutlineChatBubbleOutline
        // }, {
        //     "id": "8",
        //     "to": "/setting",
        //     "name": "Setting",
        //     Icon: MdOutlineSettings
        // }
    ]
    return (
        <div className={` ${toggle ? 'w-80' : 'w-30'} shadow-lg fixed z-50 min-h-screen bg-white `}>
            <div className='p-2 flex flex-col items-center'>
                {/* logo */}
                <li className=' relative flex w-full'>
                    <NavLink to="/" className={` text-xl text-[#1FAEC5] font-bold  ${toggle ? 'pl-20 p-4' : 'pt-4 px-4'}  w-full flex items-center`}>
                        <img className='pr-2' src={logo} alt="" />
                        <span className={` ${!toggle ? 'hidden' : ''}`}>Shopzilla</span>
                    </NavLink>
                    <button
                        onClick={toggleSidebar}
                        className='bg-white p-2 text-stone-600 rounded-full shadow-md hover:text-[#0400DA] absolute transition-all -right-5 top-4'>
                        {toggle ?
                            <MdOutlineKeyboardArrowLeft size={20} /> :
                            <MdOutlineKeyboardArrowRight size={20} />
                        }
                    </button>
                </li>

                {/*------------------ navlinks--------------- */}
                {navbar.map((item) => {
                    const { id, to, name, Icon } = item
                    return (
                        <li key={id} className='flex  w-full'>
                            <NavLink to={to} className={({ isActive }) =>
                                isActive ? `m-2 p-1 border-r-4 border-[#1FAEC5] rounded ${toggle ? 'pl-20 pr-2' : 'p-4 py-2'}  w-full flex items-center text-sm` : `m-2 p-1 hover:border-r-4 hover:border-[#80acb3] rounded ${toggle ? 'pl-20 pr-2' : 'p-4 py-2'} w-full flex items-center text-sm`
                            }>

                                {toggle ? <Icon size={20} className='' /> : <Icon size={25} className='' />}

                                <span className={` ${!toggle ? 'hidden' : ''} px-4`}>{name}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </div>

            {/* -------------banner-------------------- */}
            {/* {toggle ?
                <div className=' m-2 flex justify-center items-center'>
                    <div className='mb-2 py-4 absolute flex items-center justify-center text-center bottom-0 h-48 w-48 rounded-md bg-[#38C6DD]'>
                        <div className='relative top-0 left-0'>
                            <MdAddCircleOutline className='bg-white rounded-full mx-auto' size={30} color='#00E0C6' />
                            <p className='p-2'>Need Help</p>
                            <p className='px-2 text-xs'>About Account Management Ordering & Payment Refund and FAQ</p>
                            <button className='my-2 p-2 text-sm font-medium bg-[#D9F4FF] text-[#1A3A3F] rounded-md'>Customer Service</button>
                        </div>
                    </div>
                </div>
                :
                ''} */}

        </div>
    )
}

export default Sidebar