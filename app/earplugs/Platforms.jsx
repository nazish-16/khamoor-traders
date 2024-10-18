import React from 'react'
import Image from 'next/image'
import amazon from '../images/amazon.webp'
import shopify from '../images/shopify.webp'
import { motion } from 'framer-motion';

const Platforms = () => {
  return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
      <div className='h-full w-full flex items-center justify-center flex-col p-5 pt-20 sm:pt-12'>
        <div>
            <h1 className='text-black text-5xl font-bold pb-8'>Available On</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between pb-5'>
            <div className='flex flex-col items-center justify-center pt-8'>
                <Image src={amazon} className='w-56 md:w-64 pb-5'/>
                <h1 className='text-black text-lg md:text-xl font-medium pb-5 text-center'>Earplugs people actually want to wear.</h1>
                <p className='text-[#4c4f5a] max-w-lg text-center'>Khamoor traders limited is committed to providing each customer with the highest standard of customer service on Amazon.</p>
            </div>
            <div className='flex flex-col items-center justify-center pt-8 pb-5'>
                <Image src={shopify} className='w-52 md:w-64 pb-5'/>
                <h1 className='text-black text-xl font-medium pb-5 text-center'>Top pick earplugs for concerts.</h1>
                <p className='text-[#4c4f5a] max-w-lg text-center'>Khamoor Traders Limited is committed to offering an exceptional shopping experience on Shopify. We focus on providing the best products.</p>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Platforms