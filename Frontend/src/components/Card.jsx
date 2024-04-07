import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";


import { MdStar } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HamContext } from '../context/HamContext';

const Card = ({ pro }) => {
    const { image, discription, id, title, price, rating, brand } = pro;
    const { saved,handleSave, addSaved, handleAdd } = useContext(HamContext);

    return (
        <div className=' bg-white hover:translate-y-[-5px] transition-all duration-200'>
            <div>
                <div className='relative max-w-[275px] mx-auto rounded-md transition-all duration-200 '>
                    <button onClick={() => handleSave(pro)} className='absolute top-0 right-0 p-4'>

                        {/* {
                            saved.includes(pro) ? <FaHeart className='text-red-500' size={20} color='red' /> : 
                            <CiHeart className='' size={20} color='' />
                        } */}

                        {
                            saved.includes(pro) ? <FaHeart className='text-red-500' size={20} color='red' /> : 
                            <CiHeart className='' size={20} color='' />
                        }
                    {/* <CiHeart className='' size={20} color='' /> */}
                </button>
                    <img className='p-2  mx-auto h-36 h-24' src={`${image}`} alt="" />
                    <div className='p-4 rounded-md bg-gray-100 grid gap-2'>
                        <Link to={`/product/${id}`} className='grid gap-2'>
                            <div className='flex items-center justify-between gap-4'>
                                <p className='text-sm text-stone-900 font-semibold'>{title.slice(0, 20)}</p>
                                <p className='text-xs font-medium'>${price}</p>
                            </div>
                            <p className=' text-stone-600 text-xs capitalize'>{discription.slice(0, 30)}</p>
                            <p className=' flex items-center text-yellow-500 text-sm'><MdStar color='' /><MdStar color='' /><MdStar color='' /><MdStar color='' /> {rating}</p>

                        </Link>
                        <div>
                            <button onClick={() => handleAdd(pro)} className='block px-4 py-2 rounded-full outline outline-1 outline-stone-900 hover:bg-slate-900 hover:text-white text-xs transition-all duration-200'>Add to Bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card