'use client'

import React from 'react'
import Link from 'next/link'
import AboutProduct from './AboutProduct'
import Reviews from './Reviews'
import ProductTypes from './ProductTypes'
import ProductUsage from './ProductUsage'
import Footer from 'app/home/Footer'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}>
    <div className='background flex items-center justify-center h-[200px] w-full'>
        <div className='flex flex-col relative bottom-10 sm:bottom-10 xl:bottom-16 m-0 sm:m-10'>
            <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-black font-extrabold tracking-tighter mb-1'>
            Live Life at <br/> Your Volume
            </h1>
            <p className='text-lg text-black mt-4 ml-3'>Lean into everything you love thats loud <br/> with bold noise-reducing earwear.</p>
            <div className='flex items-center mt-4'>
                <Link href="/" className='border-[#242426] border p-3 rounded-full m-1 hover:bg-[#242426] transition hover:text-white'>Help me Choose</Link>
                <Link href="/products" className='bg-[#242426] p-3 rounded-full m-1 transition text-white'>Discover all earplugs</Link>
            </div>
        </div>
        <div className='hidden xl:grid xl:grid-cols-3 relative bottom-16 m-10 gap-2'>
            <div className='bg-white p-5 rounded-lg border-[2px] border-[#b1dcd2] hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/51SjO34qFUL._AC_SL1500_.jpg" alt="" className='w-28' />
                <h1 className='text-black p-1'>Earp plugs (Aqua)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#b1dcd2] rounded-xl pt-1 pb-1 pl-3 pr-3 text-white'>Explore</a>
            </div>
            <div className='bg-white p-5 rounded-lg border-[2px] border-[#e9e6df] hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/51V1TDcwUrL._AC_SL1500_.jpg" alt="" className='w-28' />
                <h1 className='text-black p-1'>Earp plugs (Skin)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#e6dabf] rounded-xl pt-1 pb-1 pl-3 pr-3 text-white'>Explore</a>
            </div>
            <div className='bg-white p-5 rounded-lg border-[2px] border-[#e3d5ee] hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/41OOqMxMQgL._AC_.jpg" alt="" className='w-28' />
                <h1 className='text-black p-1'>Earp plugs (Pink)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#d4b8ea] rounded-xl pt-1 pb-1 pl-3 pr-3 text-white'>Explore</a>
            </div>
        </div>
    </div>
        <AboutProduct/>
        <ProductUsage/>
        <Reviews/>
        <ProductTypes/>
        <Footer/>
    </motion.div>
    </div>
  )
}

export default page
