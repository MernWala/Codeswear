import React, { useEffect, useState } from 'react'
import { BsCurrencyRupee, BsFillBagCheckFill } from 'react-icons/Bs'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'

const Checkout = ({ cart, resizeCart, subTotal, getSubTotal }) => {

  useEffect(() => {
    getSubTotal(cart)
  }, [cart, getSubTotal])


  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="mt-10 flex justify-center">
          <span className="text-xl text-rose-600 font-bold uppercase">&nbsp;Checkout&nbsp;</span>
        </div>

        <div className="flex mt-5 flex-wrap justify-center xl:gap-0 md:gap-5">
          <div className="xl:w-1/2 md:w-full p-5">
            <form action="" className='flex flex-col gap-4'>
              <div className="flex justify-between w-full flex-wrap gap-3">
                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="text" name="fname" id="" placeholder='First Name' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>

                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="text" name="lname" id="" placeholder='Last Name' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>
              </div>

              <div className="flex justify-between w-full flex-wrap gap-3">
                <div className="input-group w-[100%]">
                  <input type="email" name="fname" id="" placeholder='yourmail@domain.com' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>
              </div>

              <div className="flex justify-between w-full flex-wrap gap-3">
                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="number" name="fname" id="" placeholder='+91 XXXXX XXXXX' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300 no-spinner' autoComplete='on' />
                </div>

                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="text" name="lname" id="" placeholder='City' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>
              </div>

              <div className="flex justify-between w-full flex-wrap gap-3">
                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="text" name="fname" id="" placeholder='State' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>

                <div className="input-group 2xl:w-[49%] md:w-[49%] sm:w-full w-full">
                  <input type="number" name="lname" id="" placeholder='Pincode' className='no-spinner w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                </div>
              </div>

              <div className="flex justify-between w-full flex-wrap gap-3">
                <div className="input-group w-[100%]">
                  <textarea name="address" id="" cols="30" rows="5" placeholder='Address' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' />
                </div>
              </div>
            </form>
          </div>

          <div className="2xl:w-1/2 lg:w-1/2 md:w-full w-full flex flex-col justify-between px-5 mt-5">
            <div className='bg-rose-100 rounded-t h-full'>
              <ul className='flex justify-between bg-rose-500 rounded-t py-2 px-1'>
                <li className='w-[24%] flex items-center justify-center text-center font-bold uppercase text-white'>ITEMS</li>
                <li className='w-[24%] flex items-center justify-center text-center font-bold uppercase text-white'>QTY</li>
                <li className='w-[24%] flex items-center justify-center text-center font-bold uppercase text-white'>RATE</li>
                <li className='w-[24%] flex items-center justify-center text-center font-bold uppercase text-white'>TOTAL</li>
              </ul>

              {Object.keys(cart).length !== 0 && cart && Object.keys(cart).map((ele) => {
                return (
                  <ul className='flex justify-between py-2 px-1' key={ele}>
                    <li className='w-[24%] flex items-center justify-center text-center uppercase text-rose-500 text-sm font-medium'>Avenger Tshirt</li>
                    <li className='w-[24%] flex items-center justify-center text-center uppercase text-rose-500 text-sm font-medium'>{cart[ele].qty}</li>
                    <li className='w-[24%] flex items-center justify-center text-center uppercase text-rose-500 text-sm font-medium'><BsCurrencyRupee />{cart[ele].price}</li>
                    <li className='w-[24%] flex items-center justify-center text-center uppercase text-rose-500 text-sm font-medium'>{cart[ele].price * cart[ele].qty}</li>
                  </ul>
                )
              })
              }
            </div>

            <div className="p-3 border-t bg-rose-100 rounded-b border-rose-400 flex justify-between">
              <button type="button" className='focus:outline-none focus:shadow-lg border-rose-500 uppercase text-white font-semibold bg-rose-500 py-2 px-3 rounded flex items-center gap-2 hover:text-rose-500 hover:bg-white hover:border-rose-500 border-2 transition-all'>
                <BsFillBagCheckFill />
                Pay Now
              </button>

              <span className="text-lg text-rose-500 font-bold uppercase flex items-center">
                <BsCurrencyRupee className='text-xl' />
                {subTotal}
              </span>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Checkout