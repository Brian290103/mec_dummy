import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import { BsCart, BsHeart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { BiMenuAltRight } from 'react-icons/bi';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { FaPencilAlt, FaPencilRuler } from 'react-icons/fa';

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const subMenuData = [
    { id: 1, name: 'Create Account', url: '/accounts/create-account' },
    { id: 2, name: 'Login', url: '/accounts/login' },
    { id: 3, name: 'Logout', url: '/accounts/logout' },
  ];

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };

  const handleScroll = () => {
    controlNavbar();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[80px] bg-red-500
      flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[80px] flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-1 transition-transform hover:scale-110 active:scale-75"
          onClick={() => setMobileMenu(false)}
        >
          <Image
            className="rounded-full"
            src="/logo.jpg"
            width={50}
            height={50}
            alt="mec logo"
          />
          <div className="text-lg text-white md:text-2xl"> MEC</div>
        </Link>

        <Menu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />

        {mobileMenu && (
          <MobileMenu
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        {/* Icons Menu Start */}
        <div className="flex items-center justify-center gap-2">
          {/* Single icon start */}

          <Link
            href="/admissions"
            className="items-center justify-center hidden gap-2 p-2 font-medium text-red-500 transition-transform bg-white rounded-md lg:flex hover:bg-white/95 active:scale-95"
          >
            <FaPencilAlt className="text-red-500" />
            Enroll
          </Link>

          {/* Mobile icon start */}
          <div className="flex items-center justify-center w-10 h-10 -mr-2 text-white transition-all duration-300 rounded-full cursor-pointer hover:text-red-500 md:hidden hover:bg-white lg:w-12 lg:h-12">
            {mobileMenu ? (
              <VscClose
                className="text-[30px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
            {/* Mobile icon end */}
          </div>
        </div>
        {/* Icons Menu End */}
      </Wrapper>
    </header>
  );
};

export default Header;
