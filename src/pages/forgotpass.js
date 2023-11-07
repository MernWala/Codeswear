import React, { useState } from 'react'

const Forgotpass = () => {

    const [isSubmited, setIsSubmited] = useState({
        flag: false,
        status: false,
    })

    const [email, setEmail] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        try {

            // rest of api work

            setIsSubmited({
                flag: true
            })

            setTimeout(() => {
                setIsSubmited({
                    flag: false,
                    status: true
                })
            }, 2000);

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="2xl:w-2/3 sm:w-2/3 w-full mx-auto mt-10 min-h-[30vh] 2xl:px-0 sm:px-0 px-[1rem]">

                <div className="flex justify-center mb-5">
                    <span className="font-semibold text-2xl text-rose-500 capitalize">account recovery</span>
                </div>

                <form className='bg-rose-100 2xl:w-2/3 lg:w-2/3 md:w-full w-full ml-auto mr-auto p-4 rounded-lg' onSubmit={handleSubmit}>
                    <div className="input-group w-full flex justify-end 2xl:flex-row lg:flex-row md:flex-col flex-col gap-3">
                        <input type='text' name="user" id="" placeholder='Email / Phone*' className='w-full p-2 rounded text-rose-400 focus:outline-none focus:shadow-md transition placeholder:text-rose-300 border border-rose-300' autoComplete='on' onChange={(e) => { setEmail(e.target.value) }} />

                        <button type="submit" className='justify-center py-2 flex items-center gap-2 bg-rose-500 text-white rounded px-4 border-2 border-rose-500 font-semibold uppercase focus:outline-none focus:text-rose-500 focus:bg-white focus:shadow-md transition-all hover:text-rose-500 hover:bg-white hover:shadow-md'>
                            Recover
                            {isSubmited.flag === true &&
                                <div role="status">
                                    <svg aria-hidden="true" class="w-5 h-5 animate-spin dark:text-rose-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            }
                        </button>
                    </div>
                </form>

                <div className="mt-10 text-center">
                    {isSubmited.status === true &&
                        <span span className='text-rose-500'>
                            Check your mail / phone we&apos;ve sent a password reset link
                        </span>
                    }
                </div>
            </div>
        </>
    )
}

export default Forgotpass