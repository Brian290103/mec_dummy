import React from 'react';

const NewsletterBanner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center bg-red-500 rounded-lg text-white min-h-[300px]">
        <div className="text-xl md:text-3xl">Subscribe to Our Newsletter</div>

        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-start justify-center w-full p-3 py-3 sm:w-8/12 lg:w-4/12"
        >
          <input
            type="text"
            className="w-full px-2 py-3 mb-1 text-black rounded-md outline-none"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full px-2 py-3 mb-1 text-black rounded-md outline-none"
            placeholder="Your Email"
          />
          <button className="w-full p-3 font-medium text-red-500 transition-transform bg-white rounded-md hover:bg-white/95 active:scale-95 ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBanner;
