import React from 'react';

const testimonials = [
  {
    name: "Jane Smith",
    review: "Amazing service and fast delivery! Would definitely order again.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    name: "Michael Lee",
    review: "Professional, timely, and beyond helpful!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Ajay Shetty",
    review: "Great quality and customer support. I highly recommend them!",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
  },
  {
    name: "Winonona Ryder",
    review: "Exceptional quality and unmatched customer support!",
    avatar: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col p-8 bg-gray-100'>
      <h1 className='text-black text-5xl font-bold pb-8'>Reviews</h1>
      <p className='pb-10 text-center'>At Khamoor Traders, we value each and every customer. Your feedback helps us deliver top-quality <br/> products and services, tailored to your needs.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105'
          >
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className='w-16 h-16 rounded-full mb-4 object-cover'
            />
            <h2 className='text-xl font-semibold text-gray-800'>{testimonial.name}</h2>
            <p className='text-gray-600 my-2'>{testimonial.review}</p>
            <div className='flex'>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className='h-5 w-5 text-yellow-500'
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.376 4.24a1 1 0 00.95.69h4.462c.97 0 1.371 1.24.588 1.81l-3.614 2.64a1 1 0 00-.364 1.118l1.376 4.24c.3.921-.755 1.688-1.54 1.118l-3.614-2.64a1 1 0 00-1.175 0l-3.614 2.64c-.785.57-1.84-.197-1.54-1.118l1.376-4.24a1 1 0 00-.364-1.118l-3.614-2.64c-.783-.57-.382-1.81.588-1.81h4.462a1 1 0 00.95-.69l1.376-4.24z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
