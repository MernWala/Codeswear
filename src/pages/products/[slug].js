import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Page({ addToCart }) {
    const [pinCode, setPinCode] = useState()
    const [pinStatus, setPinStatus] = useState()

    const router = useRouter()
    const slug = router.query.slug

    const handleCheckPin = async () => {
        await fetch(`/api/pincode`).then(async (e) => {
            let res = await e.json()

            if (res.includes(Number(pinCode))) {
                setPinStatus(true)
            } else {
                setPinStatus(false)
            }
        })
    }

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="px-10 lg:w-1/2 w-full lg:h-auto object-contain object-top rounded" src="https://m.media-amazon.com/images/I/51zgJauZmeL._SX679_.jpg" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <div className="flex items-center">
                                <div className="w-[80%]">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">Codes Wear</h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Avenger TShirt (XL/Black)</h1>
                                </div>
                                <div className="w-[20%]">
                                    <button type="button" className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-rose-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button type="button" className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button type="button" className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button type="button" className="border-2 border-gray-300 ml-1 bg-rose-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="title-font font-medium text-2xl text-gray-900">₹499.00</span>
                            </div>
                            <div className="flex mt-5 gap-2 2xl:flex-row md:flex-row sm:flex-col flex-col">
                                <input type="number" name="pin" onChange={(e) => { setPinCode(e.target.value) }} id="" placeholder='Check Availability' className='w-[16rem] border border-rose-200 p-2 rounded focus:outline-none no-spinner' />
                                <button type="button" className="flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded w-fit" onClick={handleCheckPin}>Check</button>
                            </div>
                            <div className="flex mt-2 gap-2 mb-5">
                                {pinStatus && pinStatus === true &&
                                    <span className="text-green-500">Yay! service available</span>
                                }
                                {!pinStatus && pinStatus === false &&
                                    <span className="text-red-500">Sorry! Service not available</span>
                                }
                            </div>
                            <div className="flex 2xl:flex-row md:flex-row sm:flex-col flex-col gap-5">
                                <div className="flex gap-2">
                                    <button type="button" className="flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded">Buy Now</button>
                                    <button type="button" onClick={() => { addToCart(slug, 1, 499, 'Avenger Hoodies', 'XL', 'Black') }} className="flex text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}