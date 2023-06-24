import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiXCircle } from 'react-icons/hi';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState('/slider-1.jpg');

  const data = [
    {
      id: 1,
      imgUrl: '/slider-1.jpg',
    },
    {
      id: 2,
      imgUrl: '/slider-2.webp',
    },
    {
      id: 3,
      imgUrl: '/slider-3.webp',
    },
    {
      id: 1,
      imgUrl: '/slider-1.jpg',
    },
    {
      id: 2,
      imgUrl: '/slider-2.webp',
    },
    {
      id: 3,
      imgUrl: '/slider-3.webp',
    },
    {
      id: 4,
      imgUrl: '/logo.jpg',
    },
    {
      id: 5,
      imgUrl: '/slider-2.webp',
    },
    {
      id: 6,
      imgUrl: '/logo.jpg',
    },
    {
      id: 7,
      imgUrl: '/logoLodge.webp',
    },
    {
      id: 4,
      imgUrl: '/logo.jpg',
    },
    {
      id: 5,
      imgUrl: '/slider-2.webp',
    },
    {
      id: 6,
      imgUrl: '/logo.jpg',
    },
    {
      id: 7,
      imgUrl: '/logoLodge.webp',
    },
    {
      id: 7,
      imgUrl: '/lodge1Img.webp',
    },
    {
      id: 7,
      imgUrl: '/logo.jpg',
    },
    {
      id: 7,
      imgUrl: '/logoLodge.webp',
    },
    {
      id: 7,
      imgUrl: '/lodge1Img.webp',
    },
    {
      id: 7,
      imgUrl: '/logo.jpg',
    },
  ];
  return (
    <div className="relative  overflow-hidden ">
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">Our Gallery</h1>
          <span className="">
            Home - Gallery - <b>Images</b>
          </span>
        </div>
      </div>
      <div className="px-2 py-3 ">
        <h1 className="">Click to View Photos</h1>
        Gallery{' '}
        <div className="grid grid-cols-8 gap-2">
          <div className="  lg:col-span-6 col-span-8">
            Images
            <div className="grid md:grid-cols-3 gap-2 grid-cols-2 ">
              {data.map((image) => {
                return (
                  <div key={image.id} className="overflow-hidden">
                    <Image
                      src={image.imgUrl}
                      width={1000}
                      height={1000}
                      className="md:min-h-[200px] min-h-[100px] hover:opacity-80 cursor-pointer hover:scale-105 transition-transform "
                      alt="gallery"
                      onClick={() => {
                        setIsOpen(true), setImage(image.imgUrl);
                      }}
                    />{' '}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="  col-span-2 hidden lg:block">Videos</div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute gap-5 bg-black/[0.5]  top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col "
          onClick={() => setIsOpen(false)}
        >
          <HiXCircle
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl cursor-pointer hover:text-red-500 transition-all duration-300"
          />
          <div className="max-h-[80vh] relative">
            <Image
              src={image}
              alt="logo"
              width={1000}
              height={1000}
              className="min-h-[200px]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 "></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
