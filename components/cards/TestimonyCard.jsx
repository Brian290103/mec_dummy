import Image from 'next/image';
import React from 'react';

const TestimonyCard = ({ testimony }) => {
  // console.log(testimony);
  return (
    <div>
      <div className="flex flex-col items-start justify-center p-3 border-t rounded-lg shadow h-[350px]">
        <div className="">
          <Image
            src="/logo.jpg"
            width={1000}
            height={1000}
            className="rounded-full sm:w-[100px] w-[50px] mb-3 cursor-pointer hover:opacity-80 hover:scale-105 transition-transform "
            alt="jane"
          />
        </div>
        <p className="text-sm md:text-base">{testimony.message}</p>
        <h1 className="mt-2 text-xl">{testimony.name}</h1>
        <span className="text-red-500">{testimony.occupation}</span>
      </div>
    </div>
  );
};

export default TestimonyCard;
