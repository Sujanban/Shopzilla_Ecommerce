import React from 'react'

const Button = ({ name, regular }) => {
    return (
        <button className={`px-3 py-2 hover:bg-[#0041C1] transition-all text-sm ${regular? '' : ''} text-white bg-[#7270EF] border-[#0041C1] border-2 rounded-md`}>
            {name}
        </button>
    )
}

export default Button