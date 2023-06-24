import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonyCard from './cards/TestimonyCard';

const Testimonials = ({ parentsTestimony, alumniTestimony }) => {
  // console.log(testimonialData);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends in you
      breakpoint: { max: 2000, min: 1536 },
      items: 3,
    },
    xl: {
      // the naming can be any, depends in you
      breakpoint: { max: 1536, min: 1280 },
      items: 2,
    },
    lg: {
      // the naming can be any, depends in you
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
    },
    md: {
      // the naming can be any, depends in you
      // breakpoint: { max: 767, min: 0 },
      breakpoint: { max: 1124, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 400 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="pb-5">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="pb-2 text-3xl text-center text-red-500 lg:text-5xl">
          Testimonials
        </h1>
        <span className="text-center">
          Lets see what our <b>parents</b> and <b>alumni</b> have to say about
          our school
        </span>
      </div>
      <div className="">
        <span className="text-xl">Parents</span>
        <div className="">
          <Carousel
            className="py-3 cursor-grab"
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
            autoPlay={true}
            infinite={true}
            showDots={true}
            arrows={false}
          >
            {parentsTestimony.map((testimony) => {
              return <TestimonyCard key={testimony.id} testimony={testimony} />;
            })}
          </Carousel>
        </div>
      </div>
      <div className="">
        <span className="text-xl">Alumni</span>
        <div className="">
          <Carousel
            className="py-3 cursor-grab"
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
            autoPlay={true}
            infinite={true}
            showDots={true}
            arrows={false}
          >
            {alumniTestimony.map((testimony) => {
              return <TestimonyCard key={testimony.id} testimony={testimony} />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
