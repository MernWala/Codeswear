import Link from 'next/link'
import React from 'react'
import { BsCart4 } from 'react-icons/Bs';


const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-10">
                    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="logo.png" alt="" height={40} width={40} />
                        <span className="ml-3 text-xl font-black text-rose-800 hover:text-rose-900">CODESWEAR</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <Link href={'/cart'} className="inline-flex items-center border-0 focus:outline-none">
                        <BsCart4 className='text-3xl' />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar