import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';
import { BiRightTopArrowCircle } from 'react-icons/bi';

const HomeCarousel = () => {
  return (
    <div className="max-h-[80vh] overflow-hidden">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        showArrows={false}
      >
        <div className="relative lg:h-[80vh] sm:h-[50vh] h-[40vh] md:h-[60vh]">
          <Image
            src="/slider-1.jpg"
            priority
            width={2000}
            alt="slide-1"
            height={2000}
            className="h-full"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full bg-black/[0.5] ">
            <div className="text-sm text-white md:text-xl">Welcome to:</div>
            <div className="text-3xl text-white md:text-5xl">
              Maasai Education Center
            </div>
            <div className="text-xl text-white md:text-2xl">
              the Style Hotel School
            </div>
            <Link
              href="/admissions"
              className="flex items-center justify-center gap-2 p-3 mt-3 text-lg text-white transition-transform bg-red-500 rounded-lg hover:bg-red-500/90 active:scale-95 "
            >
              <FaPencilAlt />
              Enrol Now
            </Link>
          </div>
        </div>
        <div className="relative lg:h-[80vh] sm:h-[50vh] h-[40vh] md:h-[60vh]">
          <Image
            src="/slider-2.webp"
            priority
            width={2000}
            alt="slide-1"
            height={2000}
            className="h-full"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full bg-black/[0.5] ">
            <div className="text-sm text-white md:text-xl">Welcome to:</div>
            <div className="text-3xl text-white md:text-5xl">
              Oreteti Mara Lodge
            </div>
            <div className="text-xl text-white md:text-2xl">
              the Style Hotel School
            </div>
            <Link
              href="https://www.oretetimaralodge.com"
              target="_blank"
              className="flex items-center justify-center gap-2 p-3 mt-3 text-lg text-white transition-transform bg-red-500 rounded-lg hover:bg-red-500/90 active:scale-95 "
            >
              <FaPencilAlt />
              Book Now
              <BiRightTopArrowCircle />
            </Link>
          </div>
        </div>
        <div className="relative lg:h-[80vh] sm:h-[50vh] h-[40vh] md:h-[60vh]">
          <Image
            src="/slider-3.webp"
            priority
            width={2000}
            alt="slide-1"
            height={2000}
            className="h-full"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full bg-black/[0.5] ">
            <div className="text-3xl text-white md:text-5xl">
              All are welcomed
            </div>
            <div className="w-10/12 mt-5 border"></div>
            <div className="w-8/12 mt-1 border"></div>
            <div className="w-6/12 mt-1 border"></div>
            <div className="w-4/12 mt-1 border"></div>
            <div className="w-2/12 mt-1 border"></div>
            <div className="w-1/12 mt-1 border"></div>
          </div>
        </div>
        {/* <div className="">
          <Image
            src="/slider-2.webp"
            priority
            width={2000}
            alt="slide-2"
            height={2000}
            className="lg:h-[80vh] sm:h-[50vh] h-[40vh] md:h-[60vh]"
          />
        </div>
        <div className="">
          <Image
            src="/slider-3.webp"
            priority
            width={2000}
            alt="slide-3"
            height={2000}
            className="lg:h-[80vh] sm:h-[50vh] h-[40vh] md:h-[60vh]"
          />
        </div> */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
