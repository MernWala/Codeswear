import React, { useState } from 'react'
import loginSvg from '../assets/svg/login.svg'
import signupSvg from '../assets/svg/signup.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    return (
        <div className="2xl:w-3/4 lg:w-3/4 md:w-[90%] w-[90%] bg-rose-50 ml-auto mr-auto mt-10 rounded-lg overflow-hidden">
            <div className="flex text-white bg-rose-500">
                <button type="button" className={`p-3 w-1/2 font-bold uppercase ${isSignup === true && 'bg-white border-2 border-rose-500 rounded-tl-lg text-rose-500'}`} onClick={() => { setIsSignup(false) }}>Login</button>
                <button type="button" className={`p-3 w-1/2 font-bold uppercase ${isSignup === false && 'bg-white border-2 border-rose-500 rounded-tr-lg text-rose-500'}`} onClick={() => { setIsSignup(true) }}>Register</button>
            </div>

            {isSignup === true ?
                <div className='flex'>
                    <div className='2xl:p-10 lg:p-10 md:p-5 p-5'>
                        <span className="text-2xl first-letter:text-4xl first-letter:font-semibold font-bold text-rose-500 block mb-10">Welcome to Codeswear.com</span>
                        <form action="" className='flex flex-col gap-4'>
                            <div className="flex justify-between w-full flex-wrap gap-3">
                                <div className="flex justify-between w-full flex-wrap gap-3">
                                    <div className="input-group 2xl:w-[48%] md:w-[48%] sm:w-full w-full">
                                        <input type="text" name="fname" id="" placeholder='First Name' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                    </div>

                                    <div className="input-group 2xl:w-[48%] md:w-[48%] sm:w-full w-full">
                                        <input type="text" name="lname" id="" placeholder='Last Name' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                    </div>
                                </div>

                                <div className="input-group w-full">
                                    <input type="email" name="email" id="" placeholder='yourmail@domain.com*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                </div>

                                <div className="input-group w-full">
                                    <input type="password" name="password" id="" placeholder='Password*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                </div>

                                <div className="input-group w-full">
                                    <input type="password" name="password" id="" placeholder='Re-enter Password*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                </div>

                                <div className="input-group w-full">
                                    <button type='button' onClick={() => { setIsSignup(!isSignup) }} className="text-rose-500 text-sm underline">
                                        Existing User? Login
                                    </button>
                                </div>

                                <div className="input-group w-full mt-5">
                                    <button type="button" className='block ml-auto mr-auto bg-rose-500 py-2 px-3 rounded font-bold uppercase text-white focus:outline-none focus:shadow-md'>
                                        Register
                                    </button>
                                    <span className='block text-center mt-4 text-rose-500 font-semibold'>
                                        or
                                    </span>
                                </div>

                                <div className='mt-4 flex justify-center w-full'>
                                    <button type="button" className='flex gap-2 shadow-md bg-white py-3 px-4 rounded font-semibold text-gray-800'>
                                        <FcGoogle className='text-2xl items-center' />
                                        Continue with Google
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Image priority src={signupSvg} alt="" className='2xl:block lg:block md:hidden hidden 2xl:w-1/2 xl:w-1/2 lg:3/4' />
                </div>
                :
                <div className='flex'>
                    <Image priority src={loginSvg} alt="" className='2xl:block lg:block md:hidden hidden 2xl:w-1/2 xl:w-1/2 lg:3/4' />
                    <div className='2xl:p-10 lg:p-10 md:p-5 p-5'>
                        <span className="text-2xl first-letter:text-4xl first-letter:font-semibold font-bold text-rose-500 block mb-10">Welcome Back!</span>
                        <form action="" className='flex flex-col gap-4'>
                            <div className="flex justify-between w-full flex-wrap gap-3">
                                <div className="input-group w-full">
                                    <input type="text" name="phone" id="" placeholder='Email / Phone*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                </div>

                                <div className="input-group w-full flex justify-end">
                                    <input type={`${passwordVisibility === false ? 'password' : 'text'}`} name="password" id="" placeholder='Password*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' />
                                    {passwordVisibility === true ?
                                        <AiOutlineEye className='text-xl text-rose-500 absolute mt-3 me-3 cursor-pointer' onClick={() => { setPasswordVisibility(!passwordVisibility) }} />
                                        :
                                        <AiOutlineEyeInvisible className='text-xl text-rose-500 absolute mt-3 me-3 cursor-pointer' onClick={() => { setPasswordVisibility(!passwordVisibility) }} />
                                    }
                                </div>

                                <div className="input-group w-full flex justify-between 2xl:flex-row xl:flex-row lg:flex-col-reverse flex-col-reverse gap-2">
                                    <button type='button' onClick={() => { setIsSignup(!isSignup) }} className="text-rose-500 text-sm underline text-left">
                                        New user Register
                                    </button>

                                    <Link href={'/forgotpass'} className="text-rose-500 text-sm underline">
                                        Forgot Password ?
                                    </Link>
                                </div>

                                <div className="input-group w-full">
                                    <button type="button" className='block ml-auto mr-auto bg-rose-500 py-2 px-3 rounded font-bold uppercase text-white focus:outline-none focus:shadow-md'>
                                        Login
                                    </button>
                                    <span className='block text-center mt-4 text-rose-500 font-semibold'>
                                        or
                                    </span>
                                </div>

                                <div className='mt-4 flex justify-center w-full'>
                                    <button type="button" className='flex gap-2 shadow-md bg-white py-3 px-4 rounded font-semibold text-gray-800'>
                                        <FcGoogle className='text-2xl items-center' />
                                        Continue with Google
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Auth