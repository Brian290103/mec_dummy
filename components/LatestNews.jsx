import Link from 'next/link';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import NewsCard from './cards/NewsCard';

const LatestNews = ({ newsData }) => {
  // console.log(newsData);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends in you
      breakpoint: { max: 2000, min: 1536 },
      items: 5,
    },
    xl: {
      // the naming can be any, depends in you
      breakpoint: { max: 1536, min: 1280 },
      items: 4,
    },
    lg: {
      // the naming can be any, depends in you
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    md: {
      // the naming can be any, depends in you
      // breakpoint: { max: 767, min: 0 },
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 400 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className=""> Welcome to Maasai Education Center</h1>
        <h1 className=""> the Style Hotel School</h1>
      </div>

      <h1 className="my-10 text-3xl text-center text-red-500 lg:text-5xl">
        Our Latest News
      </h1>
      <div className="">
        <Carousel
          className="py-3"
          responsive={responsive}
          containerClass="-mx-[10px]"
          itemClass="px-[10px]"
          autoPlay={true}
          infinite={true}
          showDots={true}
        >
          {newsData.map((news) => {
            return <NewsCard key={news.id} news={news} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default LatestNews;

{
  /* <Link
  href="/news"
  className="p-2 text-white transition-transform bg-red-500 rounded-lg hover:bg-red-500/90 active:scale-95"
>
  Read More
</Link>; */
}
