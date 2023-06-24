// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

import About from '@/components/About';
import Courses from '@/components/Courses';
import Founders from '@/components/Founders';
import HomeCarousel from '@/components/HomeCarousel';
import LatestNews from '@/components/LatestNews';
import Lodge from '@/components/Lodge';
import NewsletterBanner from '@/components/NewsletterBanner';
import Staff from '@/components/Staff';
import Testimonials from '@/components/Testimonials';
import Wrapper from '@/components/Wrapper';
import data from '@/data/data';

export default function Home({
  error,
  newsData,
  courseData,
  staffData,
  parentsTestimony,
  alumniTestimony,
}) {
  if (error) {
    console.error(error);
    return;
  }
  // aos init
  // Aos.init({ duration: 1800, offset: 0 });

  return (
    <main className="">
      <HomeCarousel />
      <Wrapper className="mt-10">
        <LatestNews newsData={newsData} />
        <About />
        <Courses courseData={courseData} />
        <Lodge />
        <Founders />
        <Staff staffData={staffData} />
        <Testimonials
          parentsTestimony={parentsTestimony}
          alumniTestimony={alumniTestimony}
        />
        <NewsletterBanner />
      </Wrapper>
    </main>
  );
}

// min-h-[calc(100vh-200px)]

export async function getServerSideProps() {
  // newsData;

  try {
    // const resNews = await fetch('http://localhost:3000/api/news');
    // const resCourses = await fetch('http://localhost:3000/api/course');
    // const resStaffs = await fetch('http://localhost:3000/api/staff');
    // const resTestimonials = await fetch(
    //   'http://localhost:3000/api/testimonials'
    // );
    const { news } = await import('/data/data');
    const { courses } = await import('/data/data');
    const { staff } = await import('/data/data');
    const { testimonials } = await import('/data/data');

    // console.log('====================================');
    // console.log(news);
    // console.log('====================================');

    // if (!news.ok && !courses.ok && !staff.ok && !testimonials.ok) {
    //   throw new Error('Server Error');
    // }
    // console.log(resTestimonials);
    const newsData = news;
    const courseData = courses;
    const staffData = staff;
    const testimonialData = testimonials;
    // console.log(testimonialData);

    const parentsTestimony = testimonialData.filter(
      (td) => td.role === 'parent'
    );
    const alumniTestimony = testimonialData.filter(
      (td) => td.role === 'alumni'
    );
    // console.log(parentsTestimony);

    return {
      props: {
        newsData,
        courseData,
        staffData,
        parentsTestimony,
        alumniTestimony,
      },
    };
  } catch (error) {
    console.error('Error: ', error);

    return {
      props: {
        newsData: [],
        courseData: [],
        staffData: [],
        parentsTestimony: [],
        alumniTestimony: [],
        error: 'Failed to fetch data',
      },
    };
  }
}
