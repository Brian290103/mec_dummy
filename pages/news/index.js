import Wrapper from '@/components/Wrapper';
import NewsCard from '@/components/cards/NewsCard';
import React from 'react';

const News = ({ newsData }) => {
  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">News</h1>
          <span className="">
            Home - <b>News</b>
          </span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {newsData.map((news) => {
            return <NewsCard key={news.id} news={news} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  // newsData;
  try {
    // const resNews = await fetch('http://localhost:3000/api/news');

    const { news } = await import('/data/data');

    // if (!resNews.ok) {
    //   throw new Error('Server Error');
    // }
    // console.log(resTestimonials);
    const newsData = news;

    return {
      props: {
        newsData,
      },
    };
  } catch (error) {
    console.error('Error: ', error);

    return {
      props: {
        newsData: [],

        error: 'Failed to fetch data',
      },
    };
  }
}
