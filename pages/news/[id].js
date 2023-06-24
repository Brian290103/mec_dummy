import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { HiSearch } from 'react-icons/hi';

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  // console.log(data);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const { news } = await import('/data/data.json');
        const singleNews = news.find((nw) => nw.id === id);

        // const response = await import(`http://localhost:3000/api/news/${id}`);
        // const data = await response.json();
        // const singleNews = data[0];
        setData(singleNews);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchNewsDetails();
  }, [id]);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">News</h1>
          <span className="">{data.title}</span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="grid-cols-2 gap-5 md:grid">
          <Image
            src="/slider-1.jpg"
            width={1000}
            height={1000}
            alt="news image"
          />
          <div className="mt-5 mdmt-0">
            <h1 className="text-red-500">Title</h1>
            <h1 className="text-xl font-medium md:text-3xl">{data.title}</h1>
            <h1 className="">{data.subtitle}</h1>
            <div className="flex items-center gap-2 mt-2 font-medium">
              <BiCalendar className="text-red-500" />
              {data.dateOccuring}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-5 text-clip text- md:w-3/4">{data.descr}</p>
      </Wrapper>
    </div>
  );
};

export default Category;
