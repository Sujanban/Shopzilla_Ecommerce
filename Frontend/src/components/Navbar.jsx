import React, { useContext } from 'react'
import Search from './Search'
import { HiOutlineEnvelope } from "react-icons/hi2";
import { TbBellRinging } from "react-icons/tb";
import { MdShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

import people from "../assets/images/people.jpg";
import { HamContext } from '../context/HamContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { cart, toggle } = useContext(HamContext);
    return (
        <div className={` ${toggle ? "ml-80 " : "ml-24 "} px-6 py-4 sticky `}>
            <div className='flex justify-between items-center'>
                <Search />
                <div className='flex items-center gap-4'>

                    <Link to={"/cart"} className='p-2 relative rounded-full  flex items-center'>
                        <MdOutlineShoppingBag className='' size={25} color='black' />
                        <p className='p-1 text-sm'>Cart</p>
                        {cart.length ? <div className='p-1 h-4 w-4 rounded-full flex items-center justify-center text-[8px]  text-white bg-red-400 absolute right-0 top-0'>{cart.length}</div> : null}

                    </Link>
                    <Link to="/login" className='flex items-center'>
                        {/* <button className='h-9 w-9 rounded-md'>
                            <img className='objet-cover rounded-full' src={people} alt="" />
                        </button> */}
                        <BsPerson size={30} /> <p className='p-1 text-sm'>Account</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar