import React from 'react';
import StaffCard from './cards/StaffCard';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Staff = ({ staffData }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends in you
      breakpoint: { max: 2000, min: 1536 },
      items: 4,
    },
    xl: {
      // the naming can be any, depends in you
      breakpoint: { max: 1536, min: 1280 },
      items: 3,
    },
    lg: {
      // the naming can be any, depends in you
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    md: {
      // the naming can be any, depends in you
      // breakpoint: { max: 767, min: 0 },
      breakpoint: { max: 1024, min: 600 },
      items: 2,
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
      <h1 className="py-10 text-3xl text-center text-red-500 lg:text-5xl">
        Our Staff
      </h1>
      <p className="text-center">
        In MEC, we have qualified staff in their various areas of expertise to
        help manage the school better. They include:
      </p>
      <div className="">
        <Carousel
          className="py-3"
          responsive={responsive}
          containerClass="-mx-[10px]"
          itemClass="px-[10px]"
          autoPlay={true}
          infinite={true}
        >
          {staffData.map((staff) => {
            return <StaffCard key={staff.id} staff={staff} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Staff;
