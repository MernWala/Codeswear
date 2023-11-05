import Link from 'next/link'
import React, { useState } from 'react'
import { BsCart4, BsCurrencyRupee, BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/Bs';
import { AiFillCloseCircle, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { useRouter } from 'next/router';

const Navbar = ({ cart, clearCart, resizeCart }) => {

    const path = useRouter().pathname
    const [cartFlag, setCartFlag] = useState(false)

    return (
        <>
            <header className="text-gray-600 body-font shadow-md sticky top-0 z-10 bg-white">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-10">
                    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/logo.png" alt="" height={40} width={40} />
                        <span className="ml-3 text-xl font-black text-rose-800 hover:text-rose-900">CODESWEAR</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center main-nav-custom">
                        <Link href={'/tshirt'} className={`mr-5 uppercase font-medium hover:text-gray-900 ${path === '/tshirt' ? 'active' : ''}`}>T-Shirt</Link>
                        <Link href={'/hoodies'} className={`mr-5 uppercase font-medium hover:text-gray-900 ${path === '/hoodies' ? 'active' : ''}`}>Hoodies</Link>
                        <Link href={'/watch'} className={`mr-5 uppercase font-medium hover:text-gray-900 ${path === '/watch' ? 'active' : ''}`}>watch</Link>
                        <Link href={'/mugs'} className={`mr-5 uppercase font-medium hover:text-gray-900 ${path === '/mugs' ? 'active' : ''}`}>Mug</Link>
                    </nav>

                    {/* action button of off-canvas */}
                    <button className="inline-flex items-center border-0 focus:outline-none bg-rose-100 p-2 rounded-full" type="button" onClick={() => { setCartFlag(!cartFlag) }}>
                        <BsCart4 className='text-2xl text-rose-500' />
                    </button>

                    <div id="sidebar" className={`absolute bg-rose-100 h-[100vh] w-[20rem] right-0 top-0 transition-all shadow-xl ${cartFlag ? 'right-0' : 'right-[-20rem]'}`}>
                        <div className='flex flex-col justify-between h-full'>
                            <div className='h-full'>
                                <div className='flex justify-between items-center px-3 py-4 border-b-2 border-rose-400'>
                                    <span className='text-2xl text-rose-500 font-bold'>Your Cart</span>
                                    <AiFillCloseCircle className='text-2xl text-rose-500 cursor-pointer mt-1' onClick={() => { setCartFlag(!cartFlag) }} />
                                </div>

                                {Object.keys(cart).length !== 0 ?
                                    <div className='select-none'>
                                        {cart && Object.keys(cart).map((ele) => {
                                            return (
                                                <div key={ele} className='flex py-2 px-2 border-b border-rose-300'>
                                                    <span className="text-rose-400 font-medium w-[10rem]">Avenger Tshirt</span>
                                                    <span className="text-rose-400 font-medium w-[5rem] text-center flex gap-2 items-center justify-center">
                                                        <AiFillMinusSquare onClick={() => { resizeCart(ele, 1) }} className='text-xl hover:text-rose-500 transition-all cursor-pointer' />
                                                        {cart[ele].qty}
                                                        <AiFillPlusSquare onClick={() => { resizeCart(ele, -1) }} className='text-xl hover:text-rose-500 transition-all cursor-pointer' />
                                                    </span>
                                                    <span className="text-rose-400 font-medium w-[5rem] ms-auto flex items-center justify-end">
                                                        <BsCurrencyRupee />
                                                        {cart[ele].price}
                                                    </span>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    :
                                    <div className='w-full h-full flex justify-center items-center flex-col'>
                                        <BsCart4 className='text-9xl text-rose-200' />
                                        <span className='text-xl font-bold text-rose-500 mt-5 mb-[25%]'>Your cart is empty!</span>
                                    </div>
                                }
                            </div>

                            {Object.keys(cart).length > 0 &&
                                <div className='border-t-2 border-rose-300 mb-2'>
                                    <div className='flex py-2 px-2 justify-center gap-5'>
                                        <button type="button" onClick={clearCart} className='border-rose-500 uppercase text-white font-semibold bg-rose-500 py-2 px-3 rounded flex items-center gap-2 hover:text-rose-500 hover:bg-white hover:border-rose-500 border-2 transition-all'>
                                            <BsFillCartXFill />
                                            Empty cart
                                        </button>

                                        <Link href={'/checkout'} className='border-rose-500 uppercase text-white font-semibold bg-rose-500 py-2 px-3 rounded flex items-center gap-2 hover:text-rose-500 hover:bg-white hover:border-rose-500 border-2 transition-all' onClick={() => { setCartFlag(!cartFlag) }}>
                                            <BsFillBagCheckFill />
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Navbar