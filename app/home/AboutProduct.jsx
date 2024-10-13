import React from 'react'

const AboutProduct = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-8'>
        <div>
            <h1 className='text-black text-3xl pb-10'>Best-Selling Earplugs</h1>
        </div>
        <div className='grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 2xl:grid-cols-6'>
            <div className='bg-white p-8 rounded-lg border-[2px] border-[#e3d5ee] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/41OOqMxMQgL._AC_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Ear plugs (Pink)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#d8c2ea] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
            <div className='bg-white p-8 rounded-lg border-[1px] border-[#242424] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/51LV0sheUdL._AC_SL1500_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Ear plugs (Black)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#242426] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
            <div className='bg-white p-8 rounded-lg border-[2px] border-[#e6e2de] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/51V1TDcwUrL._AC_SL1500_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Ear plugs (Skin)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#d1c1b0] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
            <div className='bg-white p-8 rounded-lg border-[1px] border-[#354060] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/41zuCrtgQJL._AC_SL1080_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Hushi Ultra (Blue)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#354060] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
            <div className='bg-white p-8 rounded-lg border-[2px] border-[#c0e4dc] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/51SjO34qFUL._AC_SL1500_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Ear plugs (Aqua)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#c0e4dc] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
            <div className='bg-white p-8 rounded-lg border-[2px] border-[#f5d9d5] hover:scale-105 transition m-2'>
                <img src="https://m.media-amazon.com/images/I/41apbjRziFL._AC_SL1080_.jpg" alt="" className='w-28' />
                <h1 className='text-black pb-1 pt-2'>Hushi Ultra (Peach)</h1>
                <p className='text-gray-600 p-1'>High-quality product</p>
                <h3 className='text-black font-bold p-1'>£9.99</h3>
                <a href="/products" className='bg-[#f5d9d5] rounded-lg pt-1 pb-1 pl-3 pr-3 flex items-center w-full text-center'>Explore</a>
            </div>
        </div>
    </div>
  )
}

export default AboutProduct