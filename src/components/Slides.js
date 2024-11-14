import React from 'react';

const slides = [    
  {
    title: 'Mike and Jakey',
    description: 'Mike',
    imageUrl: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fec5e0671-d12f-48b8-864e-f27e730f96a6.jpg?crop=1600%2C900%2C0%2C0&resize=1500',
  },
  {
    title: '',
    description: '',
    imageUrl: 'https://ringside24.com/media/post/jake-paul-vs-mike-tyson-undercard_slug.jpg',
  },
  {
    title: '',
    description: '',
    imageUrl: 'https://talksport.com/wp-content/uploads/sites/5/2024/08/GettyImages-2166636569.jpg?strip=all&w=960',
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
