import React from 'react'
import { BsCurrencyRupee, BsSearch } from 'react-icons/Bs'

const Order = () => {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-4/5 flex flex-wrap items-center justify-center mx-auto">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Codes Wear</h2>
                            <h2 className="text-gray-900 text-3xl title-font font-medium mb-4">OrderId #123456</h2>

                            <p className="leading-relaxed mb-4">Your order has been successfully placed</p>

                            <div className="w-100 bg-rose-200 rounded overflow-hidden">

                                <ul className='flex w-100 bg-rose-500 py-2'>
                                    <li className='w-1/3 text-center font-bold uppercase text-white'>Items</li>
                                    <li className='w-1/3 text-center font-bold uppercase text-white'>Quantity</li>
                                    <li className='w-1/3 text-center font-bold uppercase text-white'>Rate</li>
                                </ul>

                                <ul className='flex w-100 py-2'>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>Avenger Tshirt</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>2</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>
                                        <span className="flex justify-center items-center">
                                            <BsCurrencyRupee />
                                            <span className="font-semibold">499</span>
                                        </span>
                                    </li>
                                </ul>
                                <ul className='flex w-100 py-2'>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>Avenger Tshirt</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>2</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>
                                        <span className="flex justify-center items-center">
                                            <BsCurrencyRupee />
                                            <span className="font-semibold">499</span>
                                        </span>
                                    </li>
                                </ul>
                                <ul className='flex w-100 py-2'>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>Avenger Tshirt</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>2</li>
                                    <li className='w-1/3 text-center font-semibold text-rose-500'>
                                        <span className="flex justify-center items-center">
                                            <BsCurrencyRupee />
                                            <span className="font-semibold">499</span>
                                        </span>
                                    </li>
                                </ul>

                            </div>

                            <div className="flex flex-col mt-5 gap-3">
                                <span className="font-semibold flex items-center text-rose-500">Sub Total:&nbsp;&nbsp; <BsCurrencyRupee />12345</span>
                                <div>
                                    <button type="button" className='border-rose-500 uppercase text-white font-semibold bg-rose-500 py-2 px-3 rounded flex items-center gap-2 hover:text-rose-500 hover:bg-white hover:border-rose-500 border-2 transition-all'>
                                        <BsSearch />
                                        Track Order
                                    </button>
                                </div>
                            </div>
                        </div>

                        <img alt="ecommerce" className="2xl:w-1/3 lg:w-1/3 md:w-1/2 w-1/2 2xl:h-1/3 lg:h-1/3 md:h-1/2 h-1/2 object-cover object-center rounded" src="https://dummyimage.com/300x300" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order