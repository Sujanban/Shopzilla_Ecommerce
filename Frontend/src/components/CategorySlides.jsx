// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "../App.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideNextButton from './SlideNextButton';


// importing image
import catHeadphone from "../assets/images/Category-Headphone.png";
import catCamera from "../assets/images/Category-Camera.png";
import catPhone from "../assets/images/Category-CellPhone.png";
import catComputer from "../assets/images/Category-Computer.png";
import catGamepad from "../assets/images/Category-Gamepad.png";
import catWatch from "../assets/images/Category-SmartWatch.png";
import { HamContext } from '../context/HamContext';
import { useContext,useState } from 'react';

export default () => {
    const { brands, selectedCategory, handleCategoryClick } = useContext(HamContext);
    return (

        <>

            <Swiper className='p-2 relative'
                modules={[Navigation, Autoplay, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                // autoplay={{
                //     delay: 3000
                // }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div className='py-2 flex items-center justify-between'>
                    <h1 className='py-4 text-xl font-medium text-[#008A9F]'></h1>
                    <SlideNextButton />
                </div>


                {brands && brands.map((item,key) => (
                    <SwiperSlide 
                    key={item.id} 
                    onClick={() => handleCategoryClick(item.brand)}
                    className={selectedCategory === item.brand ? `border-2 rounded-md ring ring-[#009393]` : ``}
                    >


                        <div className='p-2 h-[100px] hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                            <img className='category-img mx-auto p-2' src={item.image} alt="" />
                            
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </>



    );
};