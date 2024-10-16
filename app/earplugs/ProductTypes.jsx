import React from 'react';
import Image from 'next/image';
import loop from '../images/loop.png';
import quiet from '../images/quiet.png';
import blue from '../images/blue.png';
import aqua from '../images/aqua.png';

const ProductTypes = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-5 md:p-10'>
      <div>
        <h1 className='text-black text-2xl md:text-3xl pb-4 md:pb-8 pt-10 md:pt-16'>
          Control how your life sounds
        </h1>
      </div>
      <div className='w-full grid grid-cols-1 xl:grid-cols-2'>
        <div className='bg-purple-100 p-5 md:p-10 rounded-lg m-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='mb-5 md:mb-0 md:mr-8'>
              <Image src={loop} alt='Loop Dream' className='w-48 h-48 md:w-56 md:h-56' />
            </div>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold'>Loop Sleepers</h1>
              <p className='mt-2 text-gray-700'>Unlock better sleep and wake up feeling fully refreshed</p>
              <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                <button className='bg-white text-purple-600 border border-purple-600 tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-purple-600 hover:text-white transition'>Deep sleep</button>
                <button className='bg-white text-purple-600 border border-purple-600 tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-purple-600 hover:text-white transition'>sleeping comfort</button>
                <button className='bg-white text-purple-600 border border-purple-600 tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-purple-600 hover:text-white transition'>noise reduction</button>
              </div>
              <button className='mt-4 md:mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition'>Shop Dream &rarr;</button>
            </div>
          </div>
        </div>
        <div className='bg-[#2b2b282e] p-5 md:p-10 rounded-lg m-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='mb-5 md:mb-0 md:mr-8'>
              <Image src={quiet} alt='Loop Dream' className='w-48 h-48 md:w-56 md:h-56' />
            </div>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold'>Sonic</h1>
              <p className='mt-2 text-gray-700'>Unlock better sleep and wake up feeling fully refreshed</p>
              <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                <button className='bg-white text-black border border-black tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-black hover:text-white transition'>Deep sleep</button>
                <button className='bg-white text-black border border-black tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-black hover:text-white transition'>sleeping comfort</button>
                <button className='bg-white text-black border border-black tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-black hover:text-white transition'>noise reduction</button>
              </div>
              <button className='mt-4 md:mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-black transition'>Shop Dream &rarr;</button>
            </div>
          </div>
        </div>
        <div className='bg-[#90b1dba0] p-5 md:p-10 rounded-lg m-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='mb-5 md:mb-0 md:mr-8'>
              <Image src={blue} alt='Loop Dream' className='w-48 h-48 md:w-56 md:h-56' />
            </div>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold'>Silent Sphere</h1>
              <p className='mt-2 text-gray-700'>Unlock better sleep and wake up feeling fully refreshed</p>
              <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                <button className='bg-white text-[#90b0db] border border-[#90b0db] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#90b0db] hover:text-white transition'>Deep sleep</button>
                <button className='bg-white text-[#90b0db] border border-[#90b0db] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#90b0db] hover:text-white transition'>sleeping comfort</button>
                <button className='bg-white text-[#90b0db] border border-[#90b0db] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#90b0db] hover:text-white transition'>noise reduction</button>
              </div>
              <button className='mt-4 md:mt-6 bg-[#90b0db] text-white px-6 py-2 rounded-lg hover:bg-[#90b0db] transition'>Shop Dream &rarr;</button>
            </div>
          </div>
        </div>
        <div className='bg-[#9dd1c696] p-5 md:p-10 rounded-lg m-4'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='mb-5 md:mb-0 md:mr-8'>
              <Image src={aqua} alt='Loop Dream' className='w-48 h-48 md:w-48 md:h-48' />
            </div>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold'>Quiet-2</h1>
              <p className='mt-2 text-gray-700'>Unlock better sleep and wake up feeling fully refreshed</p>
              <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                <button className='bg-white text-[#85e7d0] border border-[#d1ebe5] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#d1ebe5] hover:text-white transition'>Deep sleep</button>
                <button className='bg-white text-[#85e7d0] border border-[#d1ebe5] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#d1ebe5] hover:text-white transition'>sleeping comfort</button>
                <button className='bg-white text-[#85e7d0] border border-[#d1ebe5] tracking-tighter pl-1 pr-1 pt-2 pb-2 rounded-full hover:bg-[#d1ebe5] hover:text-white transition'>noise reduction</button>
              </div>
              <button className='mt-4 md:mt-6 bg-[#9ecfc3] text-white px-6 py-2 rounded-lg hover:bg-[#d1ebe5] transition'>Shop Dream &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTypes;
