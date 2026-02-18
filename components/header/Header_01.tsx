'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Navbar from '../navbar/Navbar';
import LogoLight from '../logo/LogoLight';
import useSmoothScroll from '../hooks/useSmoothScroll';

interface HeaderProps {
  variant?: 'dark' | 'light';
}

const Header_01 = ({ variant = 'dark' }: HeaderProps): React.JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const isDark = variant === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled || isDark ? 'text-white' : 'text-black';
  const hoverColor = isScrolled || isDark ? 'hover:text-gray-300' : 'hover:text-gray-600';
  const underlineColor = isScrolled || isDark ? 'bg-white' : 'bg-black';
  const hamburgerColor = isScrolled || isDark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600';

  // On homepage, smooth scroll. On other pages, navigate to homepage with hash.
  const handleNavClick = (sectionId: string) => {
    if (isHome) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/${sectionId}`;
    }
  };

  const navLinkClass = `hidden ${textColor} font-semibold text-[16px] lg:inline-block transition-all duration-300 ease-in-out ${hoverColor} hover:scale-105 relative group`;

  return (
    <header
      className={`site-header transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'site-header--sticky mobile-sticky-enable reveal-header bg-black/90 backdrop-blur-sm shadow-lg'
          : 'site-header--absolute'
      } is--white py-3`}
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {isScrolled || isDark ? (
            <LogoLight />
          ) : (
            <Link href="/">
              <Image
                src="/assets/img_placeholder/logo-dark.png"
                alt="SMARTNAV"
                width={200}
                height={24}
              />
            </Link>
          )}
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          <div className='flex items-center gap-6'>
            <button
              onClick={() => handleNavClick('#how-it-works')}
              className={navLinkClass}
            >
              How It Works
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-full`}></span>
            </button>
            <button
              onClick={() => handleNavClick('#missions-section')}
              className={navLinkClass}
            >
              Applications
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-full`}></span>
            </button>
            <Link
              href="/ai-labs"
              className={navLinkClass}
            >
              AI Labs
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
            <button
              onClick={() => handleNavClick('#contact-section')}
              className={navLinkClass}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underlineColor} transition-all duration-300 group-hover:w-full`}></span>
            </button>
            <a
              href="https://app.smartnav.ai"
              className='hidden lg:inline-block text-orange-500 font-semibold text-[16px] transition-all duration-300 ease-in-out hover:text-orange-400 hover:scale-105 relative group'
            >
              Sign In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`flex flex-col justify-center items-center w-8 h-8 ${hamburgerColor} transition-all duration-300 ease-in-out hover:scale-110 active:scale-95`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_01;
