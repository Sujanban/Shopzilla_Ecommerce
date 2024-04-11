import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

import { MdStar, MdAddCircle, MdShoppingCart, MdOutlineArrowCircleLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineArrowCircleRight, MdArrowRightAlt } from "react-icons/md";
import { IoMdHeart, IoIosRadioButtonOn } from "react-icons/io";

import headphone from "../assets/images/image1.png";
import headphone2 from "../assets/images/image2.png";
import headphone3 from "../assets/images/image3.png";
import headphone4 from "../assets/images/image4.png";

import catHeadphone from "../assets/images/Category-Headphone.png";
import catCamera from "../assets/images/Category-Camera.png";
import catPhone from "../assets/images/Category-CellPhone.png";
import catComputer from "../assets/images/Category-Computer.png";
import catGamepad from "../assets/images/Category-Gamepad.png";
import catWatch from "../assets/images/Category-SmartWatch.png";

import playstation1 from "../assets/images/playstation1.png";
import playstation2 from "../assets/images/playstation2.png";
import playstation3 from "../assets/images/playstation3.png";
import playstation4 from "../assets/images/playstation4.png";

import rect from "../assets/images/rect.png";
import earphone from "../assets/images/earphone.png";
import recthead from "../assets/images/rect-head.png";
import { HamContext } from '../context/HamContext';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { toggle, product,handleAdd, toggleSidebar } = useContext(HamContext);

  const featured = product.filter((item) => item.featured === true);
  
  return (
    <div>
      <Sidebar />
      <Navbar />
      {/* <div className={`${toggle ? "ml-80" : "ml-24"}  p-6 grid grid-cols-3 gap-4`}> */}
      <div className={`${toggle ? "ml-80" : "ml-24"} bg-white  p-6 grid grid-cols-3 gap-4`}>
        <div className='col-span-2 grid'>


          {
           featured ? featured.map((item) => (
              <div className=' shadow-sm flex items-center gap-4'>
                <div className='p-4'>
                  <img className='w-72 ' src={item.image} alt="" />
                </div>
                <div className='p-4'>
                  <h2 className='text-xl font-semibold'>{item.title.slice(0,45)}</h2>
                  <div className='flex items-center'>
                    <p className='flex items-center text-yellow-500 text-xl py-2'><MdStar /><MdStar /><MdStar /><MdStar /><MdStar /></p>
                    <p className='text-xs'>{item.rating}</p>
                  </div>
                  <p className='text-sm'>{item.discription.slice(0,100)}</p>
                  <h3 className='py-4 font-semibold'>$ {item.price}</h3>
                  <div className='flex items-center justify-between'>
                    {/* <div className='flex items-center gap-2'>
                      <p className='font-semibold'>Color</p>
                      <IoIosRadioButtonOn size={25} color='red' />
                      <IoIosRadioButtonOn size={25} color='blue' />
                      <IoIosRadioButtonOn size={25} color='green' />
                      <IoIosRadioButtonOn size={25} color='#00E7D9' />
                    </div> */}
                    {/* <div>
                      <Counter />
                    </div> */}
                  </div>
                  <div className='py-4 flex items-center gap-4'>
                    <button onClick={()=> handleAdd(item)} className='block px-4 py-2 rounded-full outline outline-2 outline-stone-900 hover:bg-slate-900 hover:text-white text-xs transition-all duration-200'>Add to Bag</button>
                  </div>
                </div>
              </div>
            )): null
          }







          {/* featured under banner-------------------- */}


          <div className=' relative my-6 grid grid-cols-3 gap-2 shadow-inner'>
            {/* <button className='absolute -right-4 top-1/2'>
              <MdOutlineKeyboardArrowRight 
              className='text-stone-600 rounded-full shadow-md hover:text-[#0400DA] bg-white -translate-y-1/2	' 
              size={25} />
              </button> */}
            {product && product.slice(0, 3).map((pro, i) => (
              <Card pro={pro} key={i} />
            ))}
          </div>






          {/* {category} */}
          <div className='py-4 '>
            <div>


              {/* <CategorySlides/> */}



              {/* <div className='py-4 grid grid-cols-6 gap-4 '>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catPhone} alt="" />
                  <p className='text-xs'>Phones</p>
                </div>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catComputer} alt="" />
                  <p className='text-xs'>Computers</p>
                </div>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catWatch} alt="" />
                  <p className='text-xs'>SmartWatch</p>
                </div>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catCamera} alt="" />
                  <p className='text-xs'>Camera</p>
                </div>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all ring ring-[#009393] text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catHeadphone} alt="" />
                  <p className='text-xs'>HeadPhones</p>
                </div>
                <div className='p-2 hover:ring hover:ring-[#009393] transition-all text-center border-2 rounded-md'>
                  <img className='mx-auto p-2' src={catGamepad} alt="" />
                  <p className='text-xs'>Gaming</p>
                </div>
              </div> */}




              {/* filtered data */}
              {/* <div>
                <div className='my-6 grid grid-cols-4 gap-2'>
                  {product && product.slice(0, 8).map((pro, i) => (
                    <Card pro={pro} key={i} />
                  )
                  )
                  }

                </div>
                <button className='flex items-center mx-auto border-2 border-[#0400DA] text-black rounded-md px-3 py-2 text-xs'>View more<MdArrowRightAlt size={20} /></button>
              </div> */}

            </div>
          </div>


          {/* New Arrival */}
          <div className='p-4'>
            <div>
              <h1 className='py-4 text-xl font-medium text-[#008A9F]'>New Arrival</h1>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <img src={playstation1} alt="" />
                </div>
                <div className='grid grid-rows-2'>
                  <img src={playstation2} alt="" />
                  <div className='grid grid-cols-2 gap-2'>
                    <img src={playstation3} alt="" />
                    <img src={playstation4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* ------------------------discount section------------------------------ */}

        <div className='max-4-[350px]'>
          <div className='mb-4 relative max-w-[350px]'>
            <img className='' src={rect} alt="" />
            <h1 className='absolute z-50 top-0 p-4 font-medium text-xl text-[#080B0B]'>Summer headphones from top brands</h1>
            <Link to={"/explore"} className='absolute z-50 bottom-0 p-4 text-[#080B0B] text-sm'>Buy now
              <MdArrowRightAlt className='inline' size={20} />
            </Link>
            <img className='absolute z-10 right-0 bottom-0 px-2' src={earphone} alt="" />
            <img className='absolute left-[40%] top-[25%] px-2' src={recthead} alt="" />
          </div>



          {/* -----------------------------daily deals---------------------------------------- */}
          <div className=' sticky max-w-[350px] top-0 scroll-auto p-4 shadow'>
            <div className=' flex items-center justify-between'>
              <h1 className='py-4 text-xl font-medium text-[#008A9F]'>Daily Deals</h1>
              <div className='flex items-center gap-1'>
                <button className='flex items-center text-xs'>View all
                  <MdArrowRightAlt size={20} color='#686464' />
                </button>
              </div>
            </div>

            {
              product && product.slice(0, 8).map((item, index) =>
                <Link to={`/product/${item.id}`}>
                  <div className=' my-2'>
                    <div className='flex gap-3'>
                      <img className='shadow-lg rounded-full p-2 h-12' src={item.image} alt="" />
                      <div className='grow'>
                        <p className='font-medium text-xs'>{item.title.slice(0, 30)}</p>
                        <p className='py-1 flex items-center text-yellow-500 text-sm'>
                          <MdStar color='' />{item.rating}</p>
                      </div>
                      <p className='text-xs '>$ {item.price}</p>
                    </div>
                  </div>
                </Link>
              )
            }
          </div>



        </div>
      </div>
    </div>
  )
}

export default Index