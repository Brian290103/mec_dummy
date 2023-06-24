import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronBarDown, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaPencilAlt } from 'react-icons/fa';

const MobileMenu = ({ showSubMenu, setShowSubMenu, setMobileMenu }) => {
  const [isClicked, setIsClicked] = useState(false);

  const data = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Services', subMenu: true },
    { id: 4, name: 'Gallery', url: '/gallery' },
    { id: 5, name: 'News', url: '/news' },
    { id: 6, name: 'Contact', url: '/contact' },
  ];
  const subMenuData = [
    { id: 1, name: 'MEC Admissions', url: '/admissions' },
    {
      id: 2,
      name: 'Oreteti Mara Lodge',
      url: 'https://www.oretetimaralodge.com',
    },
  ];
  return (
    <ul className="absolute left-0 flex flex-col font-medium md:hidden top-[80px] text-white bg-red-500 w-full h-[100vh]">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="relative flex flex-col px-5 py-4 border-b cursor-pointer felx-col"
                onClick={() => {
                  setShowSubMenu(!showSubMenu);
                  setIsClicked(!isClicked);
                }}
              >
                <div className="flex items-center justify-between ">
                  {' '}
                  {item.name}
                  {isClicked ? <BsChevronUp /> : <BsChevronDown />}
                </div>

                {showSubMenu && (
                  <ul className="mt-4 mb-0 -mx-5 text-black bg-white">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={submenu.url}
                          onClick={() => {
                            setShowSubMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="px-8 py-4 border-t">{submenu.name}</li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="px-5 py-4 border-b">
                <Link href={item.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
      <li className="px-5 py-4 border-b">
        <button className="flex items-center justify-center w-full gap-2 py-3 font-medium text-red-500 transition-transform bg-white rounded-md hover:bg-white/95 active:scale-95">
          <FaPencilAlt className="text-red-500" />
          Enroll
        </button>
      </li>
      <li className="flex flex-col items-center justify-center px-5 py-4 border-b">
        <span className="text-xl uppercase mb">Maasai Education Center</span>
        <span className="text-base">#the Style Hotel School </span>
        <span className="text-sm">info@maasaieducationcenter.com</span>
      </li>
    </ul>
  );
};

export default MobileMenu;
