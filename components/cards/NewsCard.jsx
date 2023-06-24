import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';

const NewsCard = ({ news }) => {
  const router = useRouter();
  return (
    <div>
      <div className="border-t flex flex-col justify-center rounded-md shadow h-[350px] p-2">
        <Image
          className="w-full h-40 rounded-t-md"
          src="/slider-1.jpg"
          alt="news image"
          width={1000}
          height={1000}
        />
        <div className="mt-auto mb-auto">
          <h1 className="text-lg">{news.title}</h1>
          <h1 className="text-sm">{news.subtitle}</h1>
          <div className="flex items-center gap-2 mt-1 text-red-500">
            <BiCalendar />
            <span className="">{news.dateOccuring}</span>
          </div>
          <span
            // href={`news/${news.id}`}
            onClick={() => router.push(`news/${news.id}`)}
            className="relative float-right text-red-500 group cursor-pointer "
          >
            Read More
            <span className="h-[1.5px] inline-block w-0 bg-red-500 absolute left-0 bottom-0.5  group-hover:w-full transition-[width] ease duration-300">
              &nbsp;
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
