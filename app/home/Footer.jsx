"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import logo from '../images/logo.png'
import Image from 'next/image';

const footerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-200">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-500 to-green-600 -z-10"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 relative z-10"
        variants={footerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/4">
            <Image className="mb-4 w-48" Image src={logo} alt="logo"/>
            <p className="text-lg md:text-md">Your trusted source for premium products.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link href="/Personal-Training" className="inline-block hover:text-[#242426] transition-all">Home</Link></li>
              <li><Link href="/Online-Classes" className="inline-block hover:text-[#242426] transition-all">Shop</Link></li>
              <li><Link href="/Nutrition-Consulting" className="inline-block hover:text-[#242426] transition-all">Medical Products</Link></li>
              <li><Link href="/Workout-Plans" className="inline-block hover:text-[#242426] transition-all">Kitchen Products</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link href="/About" className="inline-block hover:text-[#242426] transition-all">About Us</Link></li>
              <li><Link href="/Terms" className="inline-block hover:text-[#242426] transition-all">Terms of Service</Link></li>
              <li><Link href="/Privacy" className="inline-block hover:text-[#242426] transition-all">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li><a href="mailto:info@FitnessAiAPP.com" className="hover:text-[#242426] transition-all">Email</a></li>
              <li><a href="https://twitter.com/FitnessAiAPP" className="hover:text-[#242426] transition-all">Twitter</a></li>
              <li><a href="https://www.facebook.com/FitnessAiAPP" className="hover:text-[#242426] transition-all">Facebook</a></li>
              <li><a href="https://instagram.com/FitnessAiAPP" className="hover:text-[#242426] transition-all">Instagram</a></li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="bg-[#ececec] py-4 text-center text-sm text-black">
        <p>&copy; {new Date().getFullYear()} Khamoor Traders All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
