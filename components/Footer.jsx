import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import {
  FaCaretRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="pb-3 text-white bg-black pt-14">
      <Wrapper className="flex flex-col ">
        <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4">
          {/* Col1 */}
          <div className="flex flex-col items-center justify-center sm:col-span-2 xl:col-span-1">
            <Link href="/">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                alt="logo"
                className="transition-transform rounded-full hover:opacity-95 hover:scale-95"
              />
            </Link>
            <h1 className="text-xl">Maasai Education Center</h1>
            <p className="text-sm">the Style Hotel School</p>
          </div>

          {/* Col2 */}
          <div className="flex flex-col items-center justify-center mt-2 md:mt-3 lg:mt-0">
            <h1 className="text-xl">Quick Links</h1>
            <ul className="min-w-[200px] md:min-w-0 ">
              <li className="pb-1">
                <Link href="/admissions" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    Admissions
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link
                  href="https://www.oretetimaralodge.com"
                  className="flex items-center gap-2 "
                >
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    Oreteti Mara Lodge
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/gallery" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    Gallery
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/news" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    News
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col3 */}
          <div className="flex flex-col items-center justify-center mt-2 md:mt-3 lg:mt-0">
            <h1 className="text-xl">Pages</h1>
            <ul className="min-w-[200px] md:min-w-0">
              <li className="pb-1">
                <Link href="/" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    Home
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/about" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/contact" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/news" className="flex items-center gap-2 ">
                  <FaCaretRight />
                  <span className="text-sm transition-all duration-300 hover:translate-x-2">
                    News
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col4 */}
          <div className="flex flex-col items-center justify-center col-span-2 mt-2 lg:col-span-1 md:mt-0">
            <h1 className="text-xl">Contact Info.</h1>
            <ul className="min-w-[200px] md:min-w-0">
              <li className="flex flex-col gap-2 pb-1 cursor-pointer md:items-center sm:flex-row">
                <div className="flex items-center justify-start gap-2 md:justify-center">
                  <FaCaretRight />
                  <span className="font-medium">Address:</span>
                </div>

                <span className="text-sm transition-all duration-300 hover:translate-x-2">
                  P.O. Box 83 Lolgorien, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2 pb-1 cursor-pointer">
                <FaCaretRight />
                <span className="font-medium">Phone:</span>
                <span className="text-sm transition-all duration-300 hover:translate-x-2">
                  +254 712 345 678
                </span>
              </li>
              <li className="flex items-center gap-2 pb-1 cursor-pointer">
                <FaCaretRight />
                <span className="font-medium">Phone:</span>
                <span className="text-sm transition-all duration-300 hover:translate-x-2">
                  +254 712 345 678
                </span>
              </li>
              <li className="flex flex-col gap-2 pb-1 cursor-pointer md:items-center sm:flex-row">
                <div className="flex items-center justify-start gap-2 md:justify-center ">
                  <FaCaretRight />
                  <span className="font-medium">Email:</span>
                </div>

                <span className="text-sm transition-all duration-300 hover:translate-x-2">
                  info@maasaieducationcenter.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className="grid pt-3 mt-5 text-center md:grid-cols-2 xl:grid-cols-3 w-full max-w-[1280px] px-5 md:px-10  mx-auto">
        {/* Left */}
        <div className="flex flex-col items-center justify-center col-span-2 mb-2 text-sm basis-3 lg:flex-row lg:gap-2 xl:mb-0">
          <span className="">&copy; Maasai Education Center, </span>
          <span className="">@maasaieducationcenter.com 2023, </span>
          <span className="">Inc. All rights reserved</span>
        </div>
        {/* Right */}
        <div className="flex items-center justify-center gap-2 mt-2 ms-auto md:ms-0 md:justify-end md:mt-0 basis-1 xl:flex-row">
          <Link href="https:www.facebook.com">
            <FaFacebook size={24} />
          </Link>
          <Link href="https:www.twitter.com">
            <FaTwitter size={24} />
          </Link>
          <Link href="https:www.youtube.com">
            <FaYoutube size={24} />
          </Link>
          <Link href="https:www.instagram.com">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
