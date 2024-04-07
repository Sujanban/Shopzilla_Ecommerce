// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';

// icons
import { MdStar, MdAddCircle, MdShoppingCart, MdOutlineArrowCircleLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineArrowCircleRight, MdArrowRightAlt } from "react-icons/md";


export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <div className='flex items-center gap-1'>
            <button onClick={() => swiper.slidePrev()} className='shadow p-1 rounded-md '>
                <MdOutlineKeyboardArrowLeft size={30} color='black' />
            </button>
            <button onClick={() => swiper.slideNext()} className='shadow p-1 rounded-md '>
                <MdOutlineKeyboardArrowRight size={30} color='black' />
            </button>
        </div>
    );
}