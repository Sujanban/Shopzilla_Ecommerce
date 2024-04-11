import React, { useContext } from 'react'
import { HamContext } from '../context/HamContext'

const Counter = () => {
    const { count, setCount } = useContext(HamContext);
    return (
        <div className=''>
            <div className='flex gap-2 text-stone-900 bg-[#F4F5F4] items-center p-1  rounded-sm shadow-inner'>
                <button 
                className='h-6 w-6 flex items-center justify-center rounded-sm '
                onClick={(()=> setCount(count-1))}
                >-</button>
                <p className='w-4 flex items-center justify-center'>{count}</p>
                <button 
                className='h-6 w-6 flex items-center justify-center rounded-sm '
                onClick={(()=>setCount(count+1))}
                >+</button>
            </div>
        </div>
    )
}

export default Counter