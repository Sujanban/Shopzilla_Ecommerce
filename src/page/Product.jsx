import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar";
import { HamContext } from '../context/HamContext';

import { MdStar, MdAddCircle, MdShoppingCart, MdOutlineArrowCircleLeft, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdOutlineArrowCircleRight, MdArrowRightAlt } from "react-icons/md";
import Counter from '../components/Counter';
import { useParams, Link } from 'react-router-dom';
import Toast from '../components/Toast';


const Product = () => {

    const { toastVisible, handleButtonAdd, handleButtonRem, handleAdd, toggle, product } = useContext(HamContext);
    const [thumbnail, setThumbnail] = useState('');
    const { id } = useParams();
    const filteredData = product.filter((item) => item.id === id);

    // console.log(filteredData.gallery[0]);






    return (
        <>
            {filteredData && filteredData.map((item, index) =>
                <div className=' min-h-screen'>
                    <Sidebar />
                    <Navbar />
                    <div className={` ${toggle ? "ml-80 " : "ml-24 "}  p-6`}>
                        <div>
                            <h1 className='text-sm'><Link to={"/"}>Home</Link> / <Link to={"/explore"}>Product</Link>  / {item.brand} / {item.title.slice(0, 50)}</h1>
                            <div className='py-4 md:grid grid-cols-2 gap-4 '>

                                <div className=''>
                                    {filteredData &&
                                        <div>
                                            <div className=' w-full h-[400px]  flex items-center justify-center'>
                                                {thumbnail
                                                    ?
                                                    <img className='  h-full p-2 object-contain' src={thumbnail} alt="" />
                                                    :
                                                    <img className='  h-full p-2 object-contain' src={item.image} alt="" />
                                                }

                                            </div>
                                            <div className='p-4 grid grid-cols-5 gap-2'>
                                                {item.gallery?.map((img) =>
                                                    <div className='border'>
                                                        <img
                                                            className='  p-4 h-32  object-contain '
                                                            src={img}
                                                            alt={img}
                                                            onClick={() => setThumbnail(img)} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className=''>
                                    <div className='p-4'>
                                        <h1 className='py-2 text-xl font-medium'>{item.title}</h1>
                                        <h2>Product by : {item.brand}</h2>

                                        <div className='flex items-center text-yellow-500 text-xl py-2'>
                                            <MdStar /><MdStar /><MdStar /><MdStar /> <p className='px-2 text-sm inline-flex'>{item.rating}</p>
                                        </div>
                                        <h2 className='py-2 text-xl font-medium'>$ {item.price}</h2>
                                        <div>

                                        </div>
                                        <div className='py-2  border-b-2'>
                                            <h1>Select Color </h1>
                                            <div className='py-2 flex items-center gap-2'>
                                                <div className='w-6 h-6 rounded-sm bg-black'></div>
                                                <div className='w-6 h-6 rounded-sm bg-slate-500'></div>
                                                <div className='w-6 h-6 rounded-sm bg-stone-500'></div>
                                                <div className='w-6 h-6 rounded-sm bg-gray-500'></div>
                                            </div>
                                        </div>
                                        <div className='py-2 flex items-center gap-4'>





                                            <div className='text-sm pt-2 flex items-center gap-4'>
                                                <p className='text-stone-500 font-light'>Count : {item?.count} Item</p>
                                                <div className='flex gap-1'>
                                                    <button
                                                        className='h-6 w-6 bg-white flex items-center justify-center rounded-sm '
                                                        onClick={((e) => handleButtonRem(index, item.count))}
                                                    >-</button>
                                                    <button
                                                        className='h-6 w-6 bg-white flex items-center justify-center rounded-sm '
                                                        onClick={((e) => handleButtonAdd(index, item.count))}
                                                    >+</button>
                                                </div>
                                            </div>



                                            <div className='flex flex-grow'>
                                                <button onClick={() => handleAdd(item)} className='p-2 rounded-md text-sm w-full bg-stone-800 text-white'>Add to Cart</button>
                                            </div>

                                        </div>
                                            {toastVisible ? <Toast/> : null}
                                        <div className='py-2'>
                                            <h1 className='py-2 text-xl font-medium'>Description</h1>
                                            <p className=' text-sm'>
                                                <li className='list-disc py-1'>{item.discription}</li>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Product