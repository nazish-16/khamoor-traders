'use client';

import React, { useState, useEffect } from 'react';

const images = [
  'https://m.media-amazon.com/images/S/aplus-media-library-service-media/efa2edbd-c2d4-4ef5-86b9-9f46f79443a5.__CR0,0,970,600_PT0_SX970_V1___.jpeg',
  'https://m.media-amazon.com/images/S/aplus-media-library-service-media/fe8e5386-7f77-4626-8eea-63f2d3a4ddc3.__CR0,0,970,600_PT0_SX970_V1___.jpeg',
  'https://m.media-amazon.com/images/S/aplus-media-library-service-media/70f3caff-cb28-4328-b162-23efe76ee7eb.__CR0,0,970,600_PT0_SX970_V1___.jpeg',
  'https://m.media-amazon.com/images/S/aplus-media-library-service-media/2130620b-8a85-4c03-9e0f-813f7843d1f6.__CR0,0,970,600_PT0_SX970_V1___.jpeg',
  'https://m.media-amazon.com/images/S/aplus-media-library-service-media/aa011992-6590-4665-8741-35aa4a60ca97.__CR0,0,970,600_PT0_SX970_V1___.jpeg'
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
