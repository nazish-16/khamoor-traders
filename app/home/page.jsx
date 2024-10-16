'use client'

import React from 'react';
import Link from 'next/link';
import Platforms from 'app/earplugs/Platforms';
import Info from './Info';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}>
    <div>
    <div className="relative w-full h-[100vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        controls={false}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="https://cdn.pixabay.com/video/2020/08/03/46282-446732337_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 bottom-20 sm:bottom-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className='text-red-500'>K</span><span className='text-blue-500'>hamoor Traders</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-3xl">
          Your trusted source for premium products, delivered worldwide. Experience quality and convenience at your fingertips.
        </p>

        <div className="flex space-x-4">
          <Link href="/about" className="bg-white text-black py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Learn More
          </Link>
          <Link href="/shop" className="bg-white text-black border border-white py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
    <Info/>
    <Platforms/>
    </div>
    </motion.div>
  );
};

export default Page;
