'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col p-8 bg-gradient-to-r from-gray-100 via-white to-gray-200 pt-12">
      <motion.h1 
        className="text-black text-5xl font-bold pb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <span className='text-black text-5xl font-bold pb-8'><span className='text-[#ef4444]'>A</span><span className='text-[#3b82f6]'>bout Us</span></span>
      </motion.h1>
      <motion.div 
        className="w-full max-w-6xl hidden lg:flex justify-around items-center pb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <img 
          src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Our Factory"
          className="w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 m-3"
        />
        <img 
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Our Team"
          className="w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 m-3"
        />
        <img
          src="https://www.loopearplugs.com/cdn/shop/files/Image_block.jpg?v=1729078347&width=1340"
          alt="Our Products"
          className="w-[100vh] h-[37vh] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 m-3"
        />
      </motion.div>
      <motion.div 
        className="max-w-4xl text-center text-lg text-gray-700 leading-relaxed space-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <p>
          Welcome to <b>Khamoor Traders</b>, your trusted supplier of high-quality earplugs. We are committed to providing top-notch products that ensure comfort, safety, and reliability in every use.
        </p>
        <p>
          Our mission is to cater to the growing demand for ear protection, offering a wide range of products for personal and professional use. Whether youre looking for protection against loud environments or seeking comfort during sleep, we have got you covered.
        </p>
        <p>
          With years of experience and a dedication to quality, Khamoor Traders has built a reputation for excellence, customer satisfaction, and innovation. Were here to protect your hearing and provide the best solutions for your needs.
        </p>
      </motion.div>
      <motion.div 
        className="pt-10 pb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <a
          href="/store"
          className="border-[#242426] border text-black px-6 py-3 rounded-full duration-300 hover:bg-gray-200 transition"
        >
          Explore Our Products
        </a>
      </motion.div>
    </div>
  );
};

export default Info;
``
