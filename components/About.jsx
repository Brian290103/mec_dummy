import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="my-10 text-3xl text-center text-red-500 lg:text-5xl">
        About Us
      </h1>
      <div className="grid-cols-2 gap-5 lg:grid ">
        <Image
          src="/slider-1.jpg"
          width={1000}
          height={1000}
          alt="aboutus-image"
        />
        <div className="mt-3 md:mt-0">
          {/* Left */}
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-base">About MEC</h1>
            <Link href="/about" className="relative text-red-500 group">
              Read More
              <span className="h-[1.5px] inline-block w-0 bg-red-500 absolute left-0 bottom-0.5  group-hover:w-full transition-[width] ease duration-300">
                &nbsp;
              </span>
            </Link>
          </div>

          {/* Right */}
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            dolore sit eos blanditiis cum qui? Quidem amet porro suscipit
            ducimus.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 ">
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">30</span>
              <span className="text-base text-center ">Graduations</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">300</span>
              <span className="text-base text-center">Graduates</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">10</span>
              <span className="text-base text-center">Certificate Courses</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">10</span>
              <span className="text-base text-center">Teaching Staff</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">15</span>
              <span className="text-base text-center">Non-Teaching Staff</span>
            </div>
            <div className="flex flex-col items-center justify-center py-3">
              <span className="mb-2 text-4xl md:text-5xl">50</span>
              <span className="text-base">Current Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
