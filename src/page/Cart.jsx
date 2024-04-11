import React, { useState, useContext } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { HamContext } from '../context/HamContext';

// icons
import { MdDeleteOutline } from "react-icons/md";


const Cart = () => {

  const { cart, handleButtonAdd,handleButtonRem, handleRemove, toggle } = useContext(HamContext);
  console.log(cart);
  let subTotal = 0.00;
  let tax = 0.00;
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price * cart[i].count;
  }
  const total = (subTotal + tax).toFixed(2);

  return (
    <div className=''>
      <Sidebar />
      <Navbar />
      <div className={` ${toggle ? "ml-80 " : "ml-24 "}  px-6`}>
        <div className=' md:grid grid-cols-5 gap-4'>
          <div className=' col-span-3'>
            <h1 className='p-4 font-medium text-xl'>Cart Items</h1>
            <div className='block gap-4'>
              {
                cart.length > 0 ? cart.map((item,index) => (
                  <div key={item.id} className=' m-4 p-4 bg-stone-50 shadow flex gap-6'>
                    <img className='p-2 w-24 h-24 object-contain flex-none' src={item.image} alt="" />
                    <div className='flex-1'>
                      <h1 className='text-md text-stone-900 font-normal'>{
                        item.title?.length > 80 ? item.title.slice(0, 80) + '...' : item.title
                      }</h1>
                      <p className='text-stone-500 font-light text-sm pt-2'>Color : Red</p>

                      {/* counter */}
                      <div className='text-sm pt-2 flex items-center gap-4'>
                        <p className='text-stone-500 font-light'>Count : {item.count} Item</p>
                        <div className='flex gap-1'>
                          <button
                            className='h-6 w-6 bg-white flex items-center justify-center rounded-sm '
                            onClick={((e) => handleButtonRem(index,item.count))}
                          >-</button>
                          <button
                            className='h-6 w-6 bg-white flex items-center justify-center rounded-sm '
                            onClick={((e) => handleButtonAdd(index,item.count))}
                          >+</button>
                        </div>
                      </div>
                    </div>
                    <div className='text-stone-900 flex flex-col justify-between items-end'>
                      <MdDeleteOutline
                      onClick={() => handleRemove(item.id)}
                      className='cursor-pointer bg-gray-100 rounded-full' size={25} />
                      <h1 className='text-md font-normal'>${item.price}</h1>
                    </div>
                  </div>
                ))
                :
                <div className='p-4 text-stone-500'>No item on a cart!</div>
              }
            </div>
          </div>
          <div className='col-span-2'>
              <h1 className='p-4 font-medium text-xl'>Cart Summary</h1>
              <div className='font-normal block border-2 p-4 gap-4'>
                <div className='p-2  flex items-center justify-between'>
                  <h1>Subtotal:</h1>
                  <h1>${subTotal}</h1>
                </div>
                <div className='p-2  flex items-center justify-between'>
                  <h1>Delivery Charge:</h1>
                  <h1>Free</h1>
                </div>
                <div className='p-2 flex items-center justify-between'>
                  <h1>Taxes:</h1>
                  <h1>${tax}</h1>
                </div>
                <div className='p-2 flex items-center justify-between'>
                  <h1>Coupon:</h1>
                  <h1>$0.00</h1>
                </div>
                <div className='p-2'>
                  <h1>Promo Code</h1>
                  <div className=' py-2 flex items-center '>
                  <input type="text" placeholder='Coupon code' className='w-full text-sm rounded-full uppercase px-4 p-2 outline-none border md:flex-grow'/>
                  <button className='ml-2 px-8 py-3 rounded-full bg-stone-900 text-white text-xs'>Apply</button>
                  </div>
                </div>
                <div className='p-2 flex items-center justify-between'>
                  <h1 className='font-medium'>Total</h1>
                  <h1 className='font-medium'>${total}</h1>
                </div>
                <div>
                <button className='w-full my-8 px-8 py-3 rounded-full bg-stone-900 text-white text-xs'>Checkout</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart