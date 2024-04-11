import React,{useContext, useState} from 'react'
import { MdSearch, MdTune } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { HamContext } from '../context/HamContext';

const Search = () => {
    const navigateTo = useNavigate();
    const {search,handleSearch} = useContext(HamContext);


    

    // handleling search click
    const handleSearchClick = () => {
        navigateTo(`/explore?search=${encodeURIComponent(search)}`);
        window.location.reload();
      };
    return (
        <div className=''>
            <div className='hidden md:flex border-2 px-4 py-1 rounded-full items-center flex-wrap '>
                {/* <MdSearch size={20} /> */}
                <input 
                onSubmit={handleSearchClick}
                onChange={handleSearch}
                value={search}
                className='bg-transparent min-w-[400px] text-sm border-none placeholder:text-slate-500 ring-none outline-none text-stone-900 border p-2  placeholder-stone-800' type="search" placeholder='Search for product' />
                <MdSearch onClick={handleSearchClick} size={25} />
            </div>
        </div>
    )
}

export default Search