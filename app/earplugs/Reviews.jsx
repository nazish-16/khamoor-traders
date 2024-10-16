import React from 'react'

const Reviews = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-8'>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-28 items-center justify-between'>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=VghVCIlysYfn&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>200+ 5-star reviews</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=x46PgajLDPnH&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>2-year warranty</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=123372&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>100-day free returns</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <img src="https://img.icons8.com/?size=100&id=2JBnp98Zb8w9&format=png&color=000000" alt="" className='w-12'/>
                <h1 className='text-black lg:text-md xl:text-xl text-center font-semibold'>Safe & Sound Earplugs</h1>
            </div>
        </div>
    </div>
  )
}

export default Reviews