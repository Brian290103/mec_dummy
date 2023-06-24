import Wrapper from '@/components/Wrapper';
import AddStaff from '@/components/forms/AddStaff';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiMenu, BiUserPin } from 'react-icons/bi';
import {
  FaBars,
  FaCertificate,
  FaEye,
  FaNewspaper,
  FaPhotoVideo,
  FaSignOutAlt,
  FaUserPlus,
} from 'react-icons/fa';
const Navigation = () => {
  return (
    <div className="relative hidden min-h-screen font-medium text-white md:flex md:col-span-1 lg:col-span-1 rounded-e-xl xl:col-span-1">
      <div className="sticky h-[100vh] top-0 left-0 flex flex-col items-start justify-start w-full bg-red-500">
        <div className="flex items-center justify-start w-full gap-2 py-2 ps-2">
          <Image
            src="/logo.jpg"
            width={70}
            height={70}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="text-2xl">MEC</h1>
        </div>
        <ul className="flex flex-col justify-start w-full font-light ">
          <li className="w-full ">
            <Link
              href={`/admin/dashboard`}
              className="flex items-center gap-2 py-2 transition-all duration-300 bg-red-600 ps-2"
            >
              <BiMenu className="text-3xl" />
              Dashboard
            </Link>
          </li>
          <li className="w-full ">
            <Link
              href={`/admin/content`}
              className="flex items-center gap-2 py-2 transition-all duration-300 hover:bg-red-600 ps-2"
            >
              <BiMenu className="text-3xl" />
              Content Management
            </Link>
          </li>
          <li className="w-full ">
            <Link
              href={`/admin/admissions`}
              className="flex items-center gap-2 py-2 transition-all duration-300 hover:bg-red-600 ps-2"
            >
              <BiMenu className="text-3xl" />
              Admissions
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center w-full gap-3 py-3 mt-auto">
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="profile-img"
            className="rounded-full"
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-base">Jane Doe</h1>
            <h1 className="text-sm font-light">Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
