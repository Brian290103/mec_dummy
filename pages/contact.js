import Wrapper from '@/components/Wrapper';
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">Contact Us</h1>
          <span className="">
            Home - <b>Contact</b>
          </span>
        </div>
      </div>
      <Wrapper className="py-5">
        <h1 className="mb-3 text-3xl text-center text-red-500">
          Contact Us For Any Queries
        </h1>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Grid1 */}
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="w-full px-2 py-3 mb-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full px-2 py-3 mb-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
              placeholder="Your Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full px-2 py-3 mb-1 text-black transition-all duration-300 rounded-md outline-none ring-2 ring-slate-200 focus:ring-red-500"
              placeholder="Message"
            ></textarea>
            <div className="flex items-center justify-end">
              <button className="w-1/2 p-3 font-medium text-white transition-transform bg-red-500 rounded-md hover:bg-red-500/95 active:scale-95">
                Submit
              </button>
            </div>
          </form>

          {/* Grid2 */}
          <div className="">
            <h1 className="text-xl text-red-500"> Get in Touch</h1>
            <p className="text-sm md:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              assumenda error, autem aliquid doloribus vero facere velit ipsa
              voluptatem deleniti corrupti ipsam hic enim ea?
            </p>

            <table className="mt-5 overflow-hidden text-xs md:text-base">
              <tbody>
                <tr>
                  <th>Phone:</th>
                  <td>+254 703 234 533</td>
                </tr>
                <tr>
                  <th>Phone (Manager):</th>
                  <td>+254 703 234 533</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>info@maasaieducationcenter.com</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>P.O. Box 38, Lolgorien - Narok, Kenya</td>
                </tr>
                <tr>
                  <th>Website:</th>
                  <td>maasaieducaioncenter.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.86041208149!2d34.89873408710585!3d-1.2555433700525835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ceb22a9aec21d%3A0xd6452aea72167b91!2sMaasai%20Education%20Centre%20-%20The%20Oreteti%20Mara%20Lodge%20School!5e0!3m2!1sen!2ske!4v1685689232863!5m2!1sen!2ske"
            style={{ border: '0' }}
            className="w-full min-h-[400px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
