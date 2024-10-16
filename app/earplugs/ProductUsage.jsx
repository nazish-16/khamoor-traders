'use client';

import React, { useState, useEffect } from 'react';

const images = [
  'https://loopearplugs.in/cdn/shop/files/Use_Cases_Desk_1_33376123-e9cd-44cf-b35d-e150ea1705cc.jpg?v=1701795864&width=1100',
  'https://loopearplugs.in/cdn/shop/files/Use_Cases_Desk_2_cbbe430c-f1af-431d-a372-c9b6ace39bc7.jpg?v=1701795894&width=1100',
  'https://loopearplugs.in/cdn/shop/files/Use_Cases_Desk_3_eec3c77c-a8fe-4488-959b-53f3f8867fda.jpg?v=1701795908&width=1100',
  'https://loopearplugs.in/cdn/shop/files/Use_Cases_Desk_4_4cfb1d99-86dc-4699-9201-e8df80f003ad.jpg?v=1701795920&width=1100',
  'https://loopearplugs.in/cdn/shop/files/Use_Cases_Desk_5_5c671be3-690c-49aa-bf39-ec8a32a014f8.jpg?v=1701795932&width=1100'
];

const ProductUsage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className='w-full pt-20 pb-10 sm:pb-0'>
      <h2 className='text-center text-3xl mb-5'>Earplug Setup Instructions</h2>
      <div className='relative w-full flex justify-center items-center'>
        <img
          src={images[currentIndex]}
          alt={`Product usage ${currentIndex + 1}`}
          className={`object-cover rounded-lg transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`} // Apply animation classes
          style={{ width: '1200px', height: '500px' }}
        />
        <button onClick={prevImage} className='absolute left-4 text-black bg-[#ececec] rounded-full p-2'>
          &#10094;
        </button>
        <button onClick={nextImage} className='absolute right-4 text-black bg-[#ececec] rounded-full p-2'>
          &#10095;
        </button>
      </div>
      <div className='text-center mt-4'>
        <p>
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ProductUsage;
