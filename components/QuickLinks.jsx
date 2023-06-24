import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  FaBed,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaSchool,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const QuickLinks = () => {
  const social = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    youtube: 'https://www.youtube.com',
  };
  return (
    <div className="grid items-center grid-cols-2 font-medium text-lg text-red-500 h-[60px] text-center bg-white md:grid-cols-3 lg:py-3">
      <div className="flex items-center justify-center h-full">
        <ul className="flex items-center justify-center gap-2 text-xl text-red-500 lg:text-2xl">
          <li className="">
            <Link href={social.facebook}>
              <FaFacebook />
            </Link>
          </li>
          <li className="">
            <Link href={social.twitter}>
              <FaTwitter />
            </Link>
          </li>
          <li className="">
            <Link href={social.youtube}>
              <FaYoutube />
            </Link>
          </li>
          <li className="">
            <Link href={social.instagram}>
              <FaInstagram />
            </Link>
          </li>
          {/* <li className="">
            <Link href={social.facebook}>
              <FaEnvelope />
            </Link>
          </li> */}
        </ul>
      </div>
      <h1 className="hidden h-full md:flex items-center justify-center">
        <Marquee>Maasai Education Center</Marquee>
      </h1>
      <div className="grid h-full grid-cols-2 ">
        <div className="relative flex items-center ">
          <div className="absolute right-0 flex items-center pe-2 gap-2 border-red-500 border-e">
            <FaSchool />
            <Marquee>
              <Link href="/admissions" className="">
                <h1 className="">MEC - Enrol </h1>
              </Link>
            </Marquee>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <FaBed className="ms-2" />
          <Marquee>
            <Link href="https://www.oretetimaralodge.com">
              <h1 className="">Oreteti Mara Lodge</h1>
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
