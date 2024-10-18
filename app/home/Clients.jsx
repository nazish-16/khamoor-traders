import React from 'react'

const Clients = () => {
  return (
    <div className='lg:h-[308px] w-full flex items-center justify-center flex-col p-8 h-[60vh] bg-gradient-to-r from-gray-100 via-white to-gray-200'>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-28 items-center justify-between'>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=VghVCIlysYfn&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>140+ Happy Clients</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=x46PgajLDPnH&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>280 Cases Done
                </h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=123372&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>100-day free returns</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=CwXZfAAWNofg&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>6 Worldwide Branches</h1>
            </div>
        </div>
    </div>
  )
}

export default Clients