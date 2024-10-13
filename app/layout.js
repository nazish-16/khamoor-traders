'use client';

import "./globals.css";
import GlobalContext from "../GlobalContext";
import { useState } from "react";
import SideBar from "../components/SideBar";
import CartDrawer from "../components/CartDrawer";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import logo from './images/logo.png';
import icon from '../app/images/icon.png'; 

export default function RootLayout({ children }) {
  const [globals, setGlobals] = useState({ openCartDrawer: false, openSideBar: false, cartItems: [] });

  return (
    <html lang="en">
      <GlobalContext.Provider value={{ globals, setGlobals }}>
        <body className="bg-white">
          <SideBar />
          <header aria-label="Site Header" className="border-b border-gray-100">
            <div className="bg-black p-2 text-center tracking-wider">FREE SHIPPING 📦 OVER 14$</div>
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-2 lg:hidden"
                  onClick={() => {
                    setGlobals({ ...globals, openSideBar: true, openCartDrawer: false });
                  }}
                >
                  <img src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000" className="w-5" />
                </button>

                <Link href="/home" className="flex">
                  <span className="sr-only">Logo</span>
                  <span><Image src={logo} alt="logo" className='w-40' /></span>
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-end gap-2">
                <nav
                  aria-label="Site Nav"
                  className="hidden lg:flex lg:gap-4 lg:text-md lg:text-black"
                >
                  <Link
                    href="/home"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                  >
                    Best Sellers
                  </Link>
                  <Link href="/products"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                  >
                    Shop
                  </Link>
                  <Link href="/"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:text-gray-700 hover:border-b-2 hover:border-gray-500"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center">
                  <div className="flex items-center border-x border-gray-100">
                    <span>
                      <a
                        onClick={() => setGlobals({ ...globals, openCartDrawer: true })}
                        href="#"
                        className="relative hover:cursor-pointer grid h-16 w-16 place-content-center border-b-2 border-transparent hover:border-gray-700"
                      >
                        <div>
                          <img src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" className="w-7" />
                          <span className="p-1 bg-gray-700 text-white rounded-full h-6 w-6 text-center text-xs leading-4 absolute top-3 right-1">
                            {globals.cartItems.length}
                          </span>
                        </div>
                        <span className="sr-only">Cart</span>
                      </a>
                    </span>
                    <span>
                      <Link
                        href="/account"
                        className="grid h-16 w-16 place-content-center border-b-2 border-transparent hover:border-gray-700"
                      >
                        <img src="https://img.icons8.com/?size=100&id=7820&format=png&color=000000" className="w-7" />
                        <span className="sr-only"> Account </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <CartDrawer />
          </header>
          <div>
            {children}
          </div>
        </body>
      </GlobalContext.Provider>
    </html>
  );
}
