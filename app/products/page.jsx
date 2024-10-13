'use client';

import React from 'react';
import Card from './card';

const randomProducts = [
  {
    id: 1,
    name: 'Earp plugs (Black)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/51LV0sheUdL._AC_SL1500_.jpg',
  },
  {
    id: 9,
    name: 'Hushy Ultra-snug (Blue)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/41zuCrtgQJL._AC_SL1080_.jpg',
  },
  {
    id: 2,
    name: 'Earp plugs (Aqua)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/51SjO34qFUL._AC_SL1500_.jpg',
  },
  {
    id: 3,
    name: 'Earp plugs (Pink)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/51bXjf0zbnL._AC_SL1500_.jpg',
  },
  {
    id: 5,
    name: 'Earp plugs (Skin)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/51V1TDcwUrL._AC_SL1500_.jpg',
  },
  {
    id: 8,
    name: 'Hushy Ultra-snug (Peach)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/41apbjRziFL._AC_SL1080_.jpg',
  },
  {
    id: 7,
    name: 'Hushy Ultra-snug (Skin)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/4182MRotQqL._AC_SL1080_.jpg',
  },
  {
    id: 4,
    name: 'Earp plugs (Purple)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/41OOqMxMQgL._AC_.jpg',
  },
  {
    id: 6,
    name: 'Hushy Ultra-snug (Black)',
    price: '£9.99',
    image: 'https://m.media-amazon.com/images/I/41PrNDmq3VL._AC_SL1080_.jpg',
  },
  {
    id: 10,
    name: 'Safe & Sleek Vegetable Chopper',
    price: '£14.99',
    image: 'https://m.media-amazon.com/images/I/71kziGhShQL._AC_SL1500_.jpg',
  },
];

export default function Page() {
  const ProductListing = () => {
    return randomProducts.map((product) => <Card key={product.id} product={product} />);
  };

  const SearchBar = () => (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center">
          <div className="relative">
            <label className="sr-only" htmlFor="search">
              {" "} Search{" "}
            </label>
            <input
              className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm"
              id="search"
              type="search"
              placeholder="Search Products..." />
            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full  p-2 text-gray-600 transition hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-gray-100">
        <SearchBar />
        <div className="mt-2 max-w-screen-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductListing />
        </div>
      </div>
    </>
  );
}
