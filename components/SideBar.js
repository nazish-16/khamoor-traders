import React, { useContext } from 'react'
import GlobalContext from '../GlobalContext';
import Link from 'next/link';

export default function SideBar() {
    const {globals,setGlobals} = useContext(GlobalContext);
    let {openSideBar} =  globals;
  return (
    <div id="drawer-navigation" className={`${openSideBar?'':'-translate-x-full'} fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label`}>
    <h5 id="drawer-navigation-label" className="text-base font-semibold uppercase text-black">Menu</h5>
    <button type="button" onClick={()=>setGlobals({...globals,openSideBar:false})} aria-controls="drawer-navigation" className="p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" >
         <img src='https://img.icons8.com/?size=100&id=6483&format=png&color=000000' className='w-8'/>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href="/home" className="flex items-center p-2">
               <svg aria-hidden="true" className="flex-shrink-0w-6 h-6 text-black transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span className="flex-1 ml-3 text-left whitespace-nowrap text-black">Home</span>
            </Link>
         </li>
         <li>
            <Link href="/earplugs" className="flex items-center p-2">
               <img src='https://img.icons8.com/?size=100&id=2JBnp98Zb8w9&format=png&color=000000' className='w-6'/>
               <span className="flex-1 ml-3 text-left whitespace-nowrap text-black">Earplugs</span>
            </Link>
         </li>
         <li>
            <Link href="/" className="flex items-center p-2 ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap text-black">About</span>
            </Link>
         </li>
         <li>
            <Link href="/products" className="flex items-center p-2 ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap text-black">Products</span>
               <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </Link>
         </li>

         <li>
            <Link href="#" className="flex items-center p-2">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap text-black">Sign In / Sign Up</span>
            </Link>
         </li>
      </ul>
   </div>
</div>
  )
}
