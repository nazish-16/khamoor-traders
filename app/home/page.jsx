import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='background flex items-center justify-center h-[200px] w-full'>
        <div className='flex flex-col relative bottom-24 sm:bottom-10 xl:bottom-4 m-0 sm:m-10'>
            <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-extrabold tracking-tighter mb-1'>
            LIVE LIFE AT <br/> YOUR VOLUME
            </h1>
            <p className='text-md text-gray-700 mt-4 ml-3'>Lean into everything you love thats loud <br/> with bold noise-reducing earwear.</p>
            <div className='flex items-center mt-4'>
                <Link href="/products" className='bg-[#242426] p-3 rounded-full m-1 hover:bg-black transition'>Discover all earplugs</Link>
                <Link href="/" className='bg-[#242426] p-3 rounded-full m-1 hover:bg-black transition'>Help me Choose</Link>
            </div>
        </div>
        <div className='hidden xl:grid xl:grid-cols-3 relative bottom-5 m-10 gap-2'>
            <div className='bg-white p-5 rounded-lg border border-gray-500 hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/51SjO34qFUL._AC_SL1500_.jpg" alt="" className='w-36' />
                <h1 className='text-black pt-4 pb-2 pl-2 pr-2'>Earp plugs (Aqua)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black pb-3 pt-1 pr-1 pl-1 font-bold'>£9.99</h3>
                <a href="/products" className='bg-[#242426] rounded-xl pt-1 pb-1 pl-3 pr-3'>Explore</a>
            </div>
            <div className='bg-white p-5 rounded-lg border border-gray-500 hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/51V1TDcwUrL._AC_SL1500_.jpg" alt="" className='w-36' />
                <h1 className='text-black pt-4 pb-2 pl-2 pr-2'>Earp plugs (Skin)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black pb-3 pt-1 pr-1 pl-1 font-bold'>£9.99</h3>
                <a href="/products" className='bg-[#242426] rounded-xl pt-1 pb-1 pl-3 pr-3'>Explore</a>
            </div>
            <div className='bg-white p-5 rounded-lg border border-gray-500 hover:scale-105 transition'>
                <img src="https://m.media-amazon.com/images/I/41OOqMxMQgL._AC_.jpg" alt="" className='w-36' />
                <h1 className='text-black pt-4 pb-2 pl-2 pr-2'>Earp plugs (Pink)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black pb-3 pt-1 pr-1 pl-1 font-bold'>£9.99</h3>
                <a href="/products" className='bg-[#242426] rounded-xl pt-1 pb-1 pl-3 pr-3'>Explore</a>
            </div>
        </div>
    </div>
  )
}

export default page
