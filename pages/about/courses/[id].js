import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  // console.log(id);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const { courses } = await import('/data/data');

        // const singleNews = news.find((nw) => nw.id === id);

        const singleCourse = courses.find((cs) => cs.id === parseInt(id));
        // console.log(id, 'here');
        // console.log(courses[0].name);
        // console.log(typeof parseInt(id));
        // console.log(courses.find((cs) => cs.id === parseInt(id)));

        // const response = await fetch(`http://localhost:3000/api/courses/${id}`);
        // const data = await response.json();
        // const singleCourse = data[0];

        setData(singleCourse);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchNewsDetails();
  }, [id]);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">Course</h1>

          <span className="">{data.name}</span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="border lg:h-[80vh] sm:h-[50vh] h-[30vh] md:h-[60vh] overflow-hidden">
          <Image
            src="/slider-1.jpg"
            width={1000}
            height={1000}
            alt={data.name}
            className="h-full w-full cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col items-center justify-center my-5">
          <h1 className="text-red-500 font-medium text-3xl">{data.name}</h1>
          <p className="text-xs md:text-sm lg:text-lg mt-2 italic">
            {data.subtitle}
          </p>
        </div>
        <h2 className="text-2xl font-medium"> {data.teacher}</h2>
        <div className="">{data.descr}</div>
      </Wrapper>
    </div>
  );
};

export default CourseDetails;
