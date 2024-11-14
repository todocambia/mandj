import React from 'react';

const slides = [    
  {
    title: 'Setting up SUI',
    description: 'Set up Your SUI',
    imageUrl: '/images/1.jpeg',
  },
  {
    title: 'Carrito',
    description: 'Coge un carrito en la independencia',
    imageUrl: '/images/carrito.jpg',
  },
  {
    title: 'Ban reservas',
    description: 'Pide trabajo en el primer ban reservas que veas',
    imageUrl: '/images/ban-reservas.jpg',
  },
];

const Slides = () => {
  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <h2 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">{slide.title}</h2>
          <p className="mt-2 bg-black bg-opacity-50 p-2 rounded">{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Slides;
