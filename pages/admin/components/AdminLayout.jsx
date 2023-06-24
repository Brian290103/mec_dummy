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
import Navigation from './Navigation';

const AdminLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [className, setClassName] = useState(
    'bg-red-500 top-[80px] w-[300px] h-[100vh] fixed -left-[250px]'
  );

  const handleMenu = () => {
    menu
      ? setClassName(
          'bg-red-500 top-[80px] w-[300px] h-[100vh] fixed -left-[250px] transfrom-all duration-300'
        )
      : setClassName(
          'bg-red-500 top-[80px] w-[300px] h-[100vh] fixed left-0 transfrom-all duration-300'
        );
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-red-500 h-[80px] md:hidden flex items-center justify-between px-3 text-white text-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-medium text-white"
        >
          {' '}
          <Image
            src="/logo.jpg"
            width={50}
            height={50}
            alt="profile-img"
            className="rounded-full"
          />
          <h1 className="">MEC - Admin</h1>
        </Link>
        <button
          className=""
          onClick={() => {
            setMenu(!menu), handleMenu();
          }}
        >
          <FaBars className="" />
        </button>

        {/* Menu */}
        <div className={`${className}`}>
          <ul className="flex flex-col justify-start w-full font-light ">
            <li className="w-full ">
              {menu ? (
                <Link
                  href={`/admin/dashboard`}
                  className="flex items-center gap-2 px-2 py-2 transition-all duration-300 bg-red-600"
                >
                  <BiMenu className="text-3xl" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  href={`/admin/dashboard`}
                  className="flex items-center justify-end gap-2 px-2 py-2 transition-all duration-300 bg-red-600"
                >
                  <BiMenu className="text-3xl" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className=" ps-[50px] md:ps-0 h-[180vh] lg:h-auto grid-cols-3  md:grid lg:grid-cols-4 xl:grid-cols-5 bg-slate-100 pt-[80px] md:pt-0">
        <Navigation />
        <div className="min-h-screen px-3 py-3 md:col-span-2 lg:col-span-3 xl:col-span-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
