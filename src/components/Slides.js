import React from 'react';

const slides = [    
  {
    title: 'Big Mike',
    description: 'A champion in the ring and in life.',
    imageUrl: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fec5e0671-d12f-48b8-864e-f27e730f96a6.jpg?crop=1600%2C900%2C0%2C0&resize=1500',
  },
  {
    title: '',
    description: '',
    imageUrl: 'https://talksport.com/wp-content/uploads/sites/5/2024/08/GettyImages-2166636569.jpg?strip=all&w=960',
  },
  {
    title: '',
    description: '',
    imageUrl: 'https://ringside24.com/media/post/jake-paul-vs-mike-tyson-undercard_slug.jpg',
  },
];

const Slides = () => {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="sticky top-0 h-screen flex items-end justify-center bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          {/* Left Button - Telegram */}
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
            <div
              className="button w-40 h-16 bg-blue-500 rounded-lg cursor-pointer select-none
                active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                border-b-[1px] border-blue-400"
              onClick={() => openLink('https://t.me/miketysonvsjakepaulgamblers')}
            >
              <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                Telegram
              </span>
            </div>
          </div>

          {/* Center Text */}
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold bg-black bg-opacity-50 p-4 rounded">{slide.title}</h2>
            <p className="mt-2 bg-black bg-opacity-50 rounded px-2">{slide.description}</p>
          </div>

          {/* Right Button - X */}
          <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
            <div
              className="button w-40 h-16 bg-red-500 cursor-pointer select-none
                active:translate-y-2 active:[box-shadow:0_0px_0_0_#d62828,0_0px_0_0_#d6282841]
                active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#d62828,0_15px_0_0_#d6282841]
                rounded-full border-[1px] border-red-400"
              onClick={() => openLink('https://x.com/MikevsJakefight')}
            >
              <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                X
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;