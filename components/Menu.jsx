import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronBarDown, BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Menu = ({ showSubMenu, setShowSubMenu }) => {
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
    <ul className="items-center justify-center hidden gap-8 font-light md:flex">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="relative flex items-center gap-1 text-white transition-transform cursor-pointer"
                onMouseEnter={() => {
                  setShowSubMenu(true);
                  setIsClicked(true);
                }}
                onMouseLeave={() => {
                  setShowSubMenu(false);
                  setIsClicked(false);
                }}
              >
                {item.name}
                {isClicked ? <BsChevronUp /> : <BsChevronDown />}

                {showSubMenu && (
                  <ul className="absolute left-0 py-3  bg-red-500 top-6 min-w-[250px]  rounded-md ">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href={submenu.url}
                          onClick={() => setShowSubMenu(false)}
                        >
                          <li className="flex items-center h-12 px-3 rounded-md hover:bg-white hover:text-red-500">
                            {submenu.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="text-white transition-transform cursor-pointer hover:scale-125 active:scale-75">
                <Link href={item.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
