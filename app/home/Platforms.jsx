import React from 'react'
import Image from 'next/image'
import amazon from '../images/amazon.webp'
import shopify from '../images/shopify.webp'

const Platforms = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-5 pt-0 sm:pt-20'>
        <div>
            <h1 className='text-black text-3xl pb-8'>We are operating on: </h1>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='flex flex-col items-center justify-center pt-8 pl-10'>
                <Image src={amazon} className='w-64 pb-5'/>
                <h1 className='text-black text-lg md:text-xl font-medium pb-5 text-center'>Earplugs people actually want to wear.</h1>
                <p className='text-[#4c4f5a] max-w-lg text-center'>Khamoor traders limited is committed to providing each customer with the highest standard of customer service on Amazon.</p>
            </div>
            <div className='flex flex-col items-center justify-center p-10'>
                <Image src={shopify} className='w-64 pb-5'/>
                <h1 className='text-black text-xl font-medium pb-5 text-center'>Top pick earplugs for concerts.</h1>
                <p className='text-[#4c4f5a] max-w-lg text-center'>Khamoor Traders Limited is committed to offering an exceptional shopping experience on Shopify. We focus on providing the best products.</p>
            </div>
        </div>
    </div>
  )
}

export default Platforms